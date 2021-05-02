import { CovidService } from './CovidService';
import * as functions from 'firebase-functions';
import { COVID19_BASE_URL, DDC_VACCINE_WEBSITE } from '../types/Constants';
import { LineClient } from 'messaging-api-line';
import * as messageConstants from '../types/MessageConstants';
import * as utilsService from '../services/UtilsService';

export function displayMessageByCondition(
    client: LineClient,
    request: functions.https.Request
) {
    const receivedText: string = request.body.events[0].message.text;
    const covidServices: CovidService = new CovidService(COVID19_BASE_URL);

    switch (receivedText) {
        case messageConstants.REQUEST_COVID19_UPDATE:
            utilsService.replyCurrentSituation(
                covidServices,
                client,
                request.body
            );
            break;
        case messageConstants.REQUEST_COVID19_HISTORICAL_DATA:
            utilsService.displayQuickReplyMessages(client, request.body);
            break;
        case messageConstants.ONE_PREVIOUS_DAY:
            utilsService.displayHistoricalTimelines(
                covidServices,
                client,
                request.body,
                messageConstants.NUMBER_OBJECT.ONE
            );
            break;
        case messageConstants.TWO_PREVIOUS_DAYS:
            utilsService.displayHistoricalTimelines(
                covidServices,
                client,
                request.body,
                messageConstants.NUMBER_OBJECT.TWO
            );
            break;
        case messageConstants.THREE_PREVIOUS_DAYS:
            utilsService.displayHistoricalTimelines(
                covidServices,
                client,
                request.body,
                messageConstants.NUMBER_OBJECT.THREE
            );
            break;
        case messageConstants.FOUR_PREVIOUS_DAYS:
            utilsService.displayHistoricalTimelines(
                covidServices,
                client,
                request.body,
                messageConstants.NUMBER_OBJECT.FOUR
            );
            break;
        case messageConstants.FIVE_PREVIOUS_DAYS:
            utilsService.displayHistoricalTimelines(
                covidServices,
                client,
                request.body,
                messageConstants.NUMBER_OBJECT.FIVE
            );
            break;
        case messageConstants.SIX_PREVIOUS_DAYS:
            utilsService.displayHistoricalTimelines(
                covidServices,
                client,
                request.body,
                messageConstants.NUMBER_OBJECT.SIX
            );
            break;
        case messageConstants.SEVEN_PREVIOUS_DAYS:
            utilsService.displayHistoricalTimelines(
                covidServices,
                client,
                request.body,
                messageConstants.NUMBER_OBJECT.SEVEN
            );
            break;
        case messageConstants.REQUEST_VACCINE_INFO:
            utilsService
                .getHtmlContent(DDC_VACCINE_WEBSITE)
                .then((response: any) => {
                    utilsService.displayVaccineDailyUpdate(
                        utilsService.getVaccineInformation(response.data),
                        client,
                        request.body,
                        messageConstants.VACCINE_REPLY
                    );
                });
            break;
        default:
            utilsService.replyOnlyOneMessage(
                client,
                request.body,
                utilsService.randomAnswer()
            );
            break;
    }
}
