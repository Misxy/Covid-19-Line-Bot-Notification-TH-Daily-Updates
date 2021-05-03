import { Line, LineClient } from 'messaging-api-line';
import { Covid } from '../types/Covid';
import * as messageConstants from '../types/MessageConstants';
import { TextMessage } from 'messaging-api-line/dist/LineTypes';
import * as txtgen from 'txtgen';
import { HistoryCovid } from '../types/HistoryCovid';
import { CovidService } from './CovidService';
import { Timeline } from '../types/Timeline';
import axios, { AxiosResponse } from 'axios';
import * as Cheeerio from 'cheerio';
import {
    getBubbleVaccineTemplates,
    getBubbleTimelinesTemplates,
} from '../types/Templates';
import { Vaccine } from '../types/Vaccine';

function getReplyToken(requestBody: any): string {
    return requestBody.events[0].replyToken;
}

export function replyCurrentSituation(
    covidServices: CovidService,
    client: LineClient,
    requestBody: any
): void {
    covidServices.getTodayOverall().then((response: AxiosResponse<Covid>) => {
        if (
            isHttpStatusEqual(messageConstants.HTTP_STATUS_200, response.status)
        ) {
            client.reply(getReplyToken(requestBody), [
                createSpecificMessages(
                    messageConstants.NEW_CONFIRMED_PEOPLE,
                    response.data.NewConfirmed.toLocaleString()
                ),
                createSpecificMessages(
                    messageConstants.NEW_DEATH_PEOPLE,
                    response.data.NewDeaths.toLocaleString()
                ),
                createSpecificMessages(
                    messageConstants.NEW_HOSPITALIZED_PEOPLE,
                    response.data.NewHospitalized.toLocaleString()
                ),
                createSpecificMessages(
                    messageConstants.NEW_RECOVERED_PEOPLE,
                    response.data.NewRecovered.toLocaleString()
                ),
                createSpecificMessages(
                    messageConstants.LATEST_UPDATE,
                    response.data.UpdateDate,
                    true
                ),
            ]);
        } else {
            replyOnlyOneMessage(
                client,
                requestBody,
                messageConstants.DDC_MODIFYING_DATA
            );
        }
    });
}

export function getPercentage(numberOfVaccine: number): string {
    return (
        (numberOfVaccine / messageConstants.TOTAL_THAI_POPULATIONS) *
        100
    ).toFixed(messageConstants.AMOUNT_DECIMAL);
}

function createSpecificMessages(
    firstMessage: string,
    secondMessage: string,
    isDisplayLastUpdated: boolean = false
): TextMessage {
    if (isDisplayLastUpdated) {
        return Line.createText(
            firstMessage + messageConstants.WHITE_SPACE + secondMessage
        );
    }
    return Line.createText(
        firstMessage +
            messageConstants.WHITE_SPACE +
            secondMessage +
            messageConstants.WHITE_SPACE +
            messageConstants.PEOPLE
    );
}

function pushItemToQuickReplayObjects(
    arrayOfItems: any[],
    numberOfItems: number
): object {
    for (let index = 0; index < numberOfItems; index++) {
        const currentIndex: string = (index + 1).toString();
        const fullMessage: string = concatStrings(
            messageConstants.NEEDED_HISTORY_WORD,
            messageConstants.WHITE_SPACE,
            currentIndex,
            messageConstants.WHITE_SPACE,
            messageConstants.DAY
        );
        arrayOfItems.push({
            type: 'action',
            action: {
                type: 'message',
                label: concatStrings(
                    currentIndex,
                    messageConstants.WHITE_SPACE,
                    messageConstants.DAY
                ),
                text: fullMessage,
            },
        });
    }
    return {
        quickReply: {
            items: arrayOfItems,
        },
    };
}

export function concatStrings(
    firstMessage: string = '',
    secondMessage: string = '',
    thirdMessage: string = '',
    fourthMessage: string = '',
    fifthMessage: string = ''
): string {
    return (
        firstMessage +
        secondMessage +
        thirdMessage +
        fourthMessage +
        fifthMessage
    );
}

function getTimelines(
    arrayOfHistoryCovid: HistoryCovid[],
    amountOfTimelines: number
): HistoryCovid[] {
    return arrayOfHistoryCovid.slice(-Math.abs(amountOfTimelines + 1));
}

export function randomAnswer(): string {
    return txtgen.sentence();
}
export function displayHistoricalTimelines(
    covidServices: CovidService,
    client: LineClient,
    requestBody: any,
    requestNumber: Number
): void {
    covidServices
        .getHistoricalTimeline()
        .then((response: AxiosResponse<Timeline>) => {
            if (
                isHttpStatusEqual(
                    messageConstants.HTTP_STATUS_200,
                    response.status
                )
            ) {
                const slicedHistoryCovid: HistoryCovid[] = getTimelines(
                    response.data.Data,
                    Number(requestNumber)
                );
                displayHistoricalTimelineByCarousel(
                    client,
                    requestBody,
                    slicedHistoryCovid,
                    []
                );
            } else {
                replyOnlyOneMessage(
                    client,
                    requestBody,
                    messageConstants.DDC_MODIFYING_DATA
                );
            }
        });
}

function isHttpStatusEqual(
    expectedStatusCode: Number,
    currentStatusCode: Number
): boolean {
    return expectedStatusCode === currentStatusCode ? true : false;
}
export function displayQuickReplyMessages(
    client: LineClient,
    requestBody: any
): void {
    client.replyText(
        getReplyToken(requestBody),
        Line.createText(messageConstants.ASK_HISTORICAL_DAYS).text,
        pushItemToQuickReplayObjects([], messageConstants.AMOUNT_HISTORICAL_DAY)
    );
}

export function getVaccineInformation(htmlContent: any): Vaccine {
    const $: Cheeerio.Root = Cheeerio.load(htmlContent);
    const updatedDate: string = $('#vaccine div span').text();
    const newFirstDoses: string = Number(
        $('#tb_vaccine td[class=r11]')
            .text()
            .replace(/[+,ราย ]/g, '')
            .trim()
    ).toLocaleString();
    const newSecondDoses: string = Number(
        $('#tb_vaccine td[class=r21]')
            .text()
            .replace(/[+,ราย ]/g, '')
            .trim()
    ).toLocaleString();
    const allNewDoses: string = Number(
        $('#tb_vaccine td[class=c11]')
            .text()
            .replace(/[+,โดส ]/g, '')
            .trim()
    ).toLocaleString();
    const accumulatedFirstDoses: number = Number(
        $('#tb_vaccine td[class=r12]')
            .text()
            .replace(/[+,ราย ]/g, '')
            .trim()
    );
    const accumulatedSecondDoses: number = Number(
        $('#tb_vaccine td[class=r22]')
            .text()
            .replace(/[+,ราย ]/g, '')
            .trim()
    );
    const allAccumulatedDoses: number = Number(
        $('#tb_vaccine td[class=c21]')
            .text()
            .replace(/[+,โดส ]/g, '')
            .trim()
    );

    const vaccine: Vaccine = new Vaccine(
        updatedDate,
        newFirstDoses,
        newSecondDoses,
        allNewDoses,
        getPercentage(accumulatedFirstDoses),
        getPercentage(accumulatedSecondDoses),
        getPercentage(allAccumulatedDoses)
    );
    return vaccine;
}

export async function getHtmlContent(url: string): Promise<AxiosResponse<any>> {
    return await axios.get(url);
}

function createCarouselTemplate(arrayOfContents: any[]): any {
    return {
        type: 'carousel',
        contents: arrayOfContents,
    };
}

export function displayVaccineDailyUpdate(
    vaccine: Vaccine,
    client: LineClient,
    requestBody: any,
    message: string
): void {
    client.replyFlex(
        getReplyToken(requestBody),
        message,
        createCarouselTemplate(getBubbleVaccineTemplates(vaccine))
    );
}

function displayHistoricalTimelineByCarousel(
    client: LineClient,
    requestBody: any,
    arrayOfCovid: HistoryCovid[],
    arrayOfContents: any[]
): void {
    for (let index = 0; index < arrayOfCovid.length; index++) {
        const colorCode: string =
            index % 2 == 0
                ? messageConstants.COLOR_CODES.LIGHT_GREEN
                : messageConstants.COLOR_CODES.White;
        const splitUpdatedDate: string[] = arrayOfCovid[index].Date.split(' ');
        arrayOfContents.push(
            getBubbleTimelinesTemplates(
                arrayOfCovid[index],
                splitUpdatedDate[0],
                colorCode
            )
        );
    }
    client.replyFlex(
        getReplyToken(requestBody),
        messageConstants.DISPLAY_PREVIOUS_DATA,
        createCarouselTemplate(arrayOfContents)
    );
}

export function replyOnlyOneMessage(
    client: LineClient,
    requestBody: any,
    message: string
): void {
    client.reply(getReplyToken(requestBody), [Line.createText(message)]);
}
