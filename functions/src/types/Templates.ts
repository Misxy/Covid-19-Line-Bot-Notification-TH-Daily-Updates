import { HistoryCovid } from './HistoryCovid';
import * as messageConstants from '../types/MessageConstants';
import { concatStrings } from '../services/UtilsService';
import { Vaccine } from './Vaccine';

export function getBubbleVaccineTemplates(vaccine: Vaccine): any[] {
    return [
        {
            type: 'bubble',
            size: 'mega',
            header: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        color: '#ffffff',
                        align: 'center',
                        size: 'lg',
                        gravity: 'center',
                        wrap: true,
                        text:
                            messageConstants.RECEIVED_FIRST_DOSES_PERCENT_LABEL,
                    },
                    {
                        type: 'text',
                        text: concatStrings(
                            vaccine.AccumulatedFirstDosesPercent,
                            messageConstants.PERCENT_SYMBOL
                        ),
                        color: '#ffffff',
                        align: 'center',
                        size: 'lg',
                        gravity: 'center',
                        margin: 'lg',
                    },
                    {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                            {
                                type: 'box',
                                layout: 'vertical',
                                contents: [
                                    {
                                        type: 'filler',
                                    },
                                ],
                                width: concatStrings(
                                    vaccine.AccumulatedFirstDosesPercent,
                                    messageConstants.PERCENT_SYMBOL
                                ),
                                backgroundColor: '#fea82f',
                                height: '12px',
                            },
                        ],
                        backgroundColor: '#9FD8E36E',
                        height: '12px',
                        margin: 'sm',
                    },
                    {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                            {
                                type: 'text',
                                color: '#ffffff',
                                align: 'center',
                                size: 'lg',
                                gravity: 'center',
                                wrap: true,
                                text:
                                    messageConstants.RECEIVED_SECOND_DOSES_PERCENT_LABEL,
                            },
                            {
                                type: 'text',
                                text: concatStrings(
                                    vaccine.AccumulatedSecondDosesPercent,
                                    messageConstants.PERCENT_SYMBOL
                                ),
                                color: '#ffffff',
                                align: 'center',
                                size: 'lg',
                                gravity: 'center',
                                margin: 'lg',
                            },
                            {
                                type: 'box',
                                layout: 'vertical',
                                contents: [
                                    {
                                        type: 'box',
                                        layout: 'vertical',
                                        contents: [
                                            {
                                                type: 'filler',
                                            },
                                        ],
                                        width: concatStrings(
                                            vaccine.AccumulatedSecondDosesPercent,
                                            messageConstants.PERCENT_SYMBOL
                                        ),
                                        backgroundColor: '#fea82f',
                                        height: '12px',
                                    },
                                ],
                                backgroundColor: '#9FD8E36E',
                                height: '12px',
                                margin: 'sm',
                            },
                        ],
                        backgroundColor: '#00af91',
                        paddingTop: '19px',
                    },
                ],
                paddingTop: '19px',
                paddingAll: '12px',
                paddingBottom: '16px',
                backgroundColor: '#00af91',
            },
            hero: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        color: '#ffffff',
                        align: 'center',
                        size: 'lg',
                        gravity: 'center',
                        wrap: true,
                        text: messageConstants.RECEIVED_ALL_DOSES_PERCENT_LABEL,
                    },
                    {
                        type: 'text',
                        text: concatStrings(
                            vaccine.AccumulatedSecondDosesPercent,
                            messageConstants.PERCENT_SYMBOL
                        ),
                        color: '#ffffff',
                        align: 'center',
                        size: 'lg',
                        gravity: 'center',
                        margin: 'lg',
                    },
                    {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                            {
                                type: 'box',
                                layout: 'vertical',
                                contents: [
                                    {
                                        type: 'filler',
                                    },
                                ],
                                width: concatStrings(
                                    vaccine.AccumulatedSecondDosesPercent,
                                    messageConstants.PERCENT_SYMBOL
                                ),
                                backgroundColor: '#fea82f',
                                height: '12px',
                            },
                        ],
                        backgroundColor: '#9FD8E36E',
                        height: '12px',
                        margin: 'sm',
                    },
                ],
                paddingTop: '19px',
                paddingAll: '12px',
                paddingBottom: '36px',
                backgroundColor: '#03506f',
            },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'box',
                        layout: 'horizontal',
                        contents: [
                            {
                                type: 'text',
                                text: vaccine.UpdatedDate,
                                color: '#8C8C8C',
                                size: 'lg',
                                wrap: true,
                                align: 'center',
                            },
                        ],
                        flex: 1,
                    },
                    {
                        type: 'box',
                        layout: 'horizontal',
                        contents: [
                            {
                                type: 'text',
                                text: concatStrings(
                                    messageConstants.REFERENCE,
                                    messageConstants.WHITE_SPACE,
                                    messageConstants.DDC,
                                    messageConstants.WHITE_SPACE,
                                    messageConstants.HEALTH_FACILITY
                                ),
                                color: '#8C8C8C',
                                size: 'lg',
                                wrap: true,
                                align: 'center',
                                offsetBottom: '2%',
                            },
                        ],
                        flex: 1,
                    },
                ],
                spacing: 'md',
                paddingAll: '12px',
            },
            styles: {
                footer: {
                    separator: false,
                },
            },
        },
        {
            type: 'bubble',
            size: 'mega',
            header: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        color: '#ffffff',
                        align: 'center',
                        size: 'lg',
                        gravity: 'center',
                        wrap: true,
                        text: messageConstants.RECEIVED_FIRST_DOSES_LABEL,
                        offsetBottom: '12px',
                    },
                    {
                        type: 'text',
                        text: concatStrings(
                            messageConstants.PLUS_SIGN,
                            vaccine.NewFirstDoses,
                            messageConstants.WHITE_SPACE,
                            messageConstants.PEOPLE
                        ),
                        color: '#ffffff',
                        align: 'center',
                        size: 'lg',
                        gravity: 'center',
                        margin: 'lg',
                        offsetBottom: '8px',
                    },
                    {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                            {
                                type: 'text',
                                color: '#ffffff',
                                align: 'center',
                                size: 'lg',
                                gravity: 'center',
                                wrap: true,
                                text:
                                    messageConstants.RECEIVED_SECOND_DOSES_LABEL,
                            },
                            {
                                type: 'text',
                                text: concatStrings(
                                    messageConstants.PLUS_SIGN,
                                    vaccine.NewSecondDoses,
                                    messageConstants.WHITE_SPACE,
                                    messageConstants.PEOPLE
                                ),
                                color: '#ffffff',
                                align: 'center',
                                size: 'lg',
                                gravity: 'center',
                                margin: 'lg',
                                offsetTop: '5px',
                            },
                        ],
                        backgroundColor: '#b67162',
                        paddingTop: '19px',
                        paddingBottom: '12px',
                    },
                ],
                backgroundColor: '#b67162',
                paddingTop: '30px',
                paddingAll: '12px',
                paddingBottom: '25px',
            },
            hero: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        color: '#ffffff',
                        align: 'center',
                        size: 'lg',
                        gravity: 'center',
                        wrap: true,
                        text: messageConstants.RECEIVED_ALL_DOSES_LABEL,
                        offsetBottom: '35px',
                    },
                    {
                        type: 'text',
                        text: concatStrings(
                            messageConstants.PLUS_SIGN,
                            vaccine.AllNewDoses,
                            messageConstants.WHITE_SPACE,
                            messageConstants.PEOPLE
                        ),
                        color: '#ffffff',
                        align: 'center',
                        size: 'lg',
                        gravity: 'center',
                        margin: 'lg',
                        offsetBottom: '25px',
                    },
                ],
                backgroundColor: '#630000',
                paddingTop: '55px',
                paddingAll: '12px',
                paddingBottom: '16px',
            },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'box',
                        layout: 'horizontal',
                        contents: [
                            {
                                type: 'text',
                                text: vaccine.UpdatedDate,
                                color: '#8C8C8C',
                                size: 'lg',
                                wrap: true,
                                align: 'center',
                            },
                        ],
                        flex: 1,
                    },
                    {
                        type: 'box',
                        layout: 'horizontal',
                        contents: [
                            {
                                type: 'text',
                                text: concatStrings(
                                    messageConstants.REFERENCE,
                                    messageConstants.WHITE_SPACE,
                                    messageConstants.DDC,
                                    messageConstants.WHITE_SPACE,
                                    messageConstants.HEALTH_FACILITY
                                ),
                                color: '#8C8C8C',
                                size: 'lg',
                                wrap: true,
                                align: 'center',
                                offsetBottom: '2%',
                            },
                        ],
                        flex: 1,
                    },
                ],
                spacing: 'md',
                paddingAll: '12px',
            },
            styles: {
                footer: {
                    separator: false,
                },
            },
        },
    ];
}

export function getBubbleTimelinesTemplates(
    historyCovid: HistoryCovid,
    date: string,
    colorCode: string
): object {
    return {
        type: 'bubble',
        body: {
            type: 'box',
            layout: 'vertical',
            contents: [
                {
                    type: 'text',
                    text: messageConstants.BUBBLE_HEADER,
                    weight: 'bold',
                    color: messageConstants.COLOR_CODES.LINE,
                    size: 'lg',
                    align: 'center',
                },
                {
                    type: 'text',
                    weight: 'bold',
                    size: 'lg',
                    margin: 'md',
                    text: concatStrings(
                        messageConstants.DATE,
                        messageConstants.WHITE_SPACE,
                        date
                    ),
                    color: messageConstants.COLOR_CODES.LIGHT_BLUE,
                    align: 'center',
                },
                {
                    type: 'separator',
                    margin: 'xxl',
                    color: messageConstants.COLOR_CODES.DARK_GREEN,
                },
                {
                    type: 'box',
                    layout: 'vertical',
                    margin: 'xxl',
                    spacing: 'sm',
                    contents: [
                        {
                            type: 'box',
                            layout: 'horizontal',
                            contents: [
                                {
                                    type: 'text',
                                    text: messageConstants.NEW_CONFIRMED_PEOPLE,
                                    size: 'lg',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    flex: 0,
                                    weight: 'bold',
                                },
                                {
                                    type: 'text',
                                    text: historyCovid.NewConfirmed.toLocaleString(),
                                    size: 'lg',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    align: 'end',
                                },
                            ],
                        },
                        {
                            type: 'box',
                            layout: 'horizontal',
                            contents: [
                                {
                                    type: 'text',
                                    text: messageConstants.NEW_DEATH_PEOPLE,
                                    size: 'lg',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    flex: 0,
                                },
                                {
                                    type: 'text',
                                    text: historyCovid.NewDeaths.toLocaleString(),
                                    size: 'lg',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    align: 'end',
                                },
                            ],
                        },
                        {
                            type: 'box',
                            layout: 'horizontal',
                            contents: [
                                {
                                    type: 'text',
                                    text: messageConstants.NEW_HOSPITALIZED_PEOPLE.toLocaleString(),
                                    size: 'lg',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    flex: 0,
                                    wrap: true,
                                },
                                {
                                    type: 'text',
                                    text: historyCovid.NewHospitalized.toLocaleString(),
                                    size: 'lg',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    align: 'end',
                                },
                            ],
                        },
                        {
                            type: 'separator',
                            margin: 'xxl',
                            color: messageConstants.COLOR_CODES.DARK_GREEN,
                        },
                        {
                            type: 'box',
                            layout: 'horizontal',
                            margin: 'xxl',
                            contents: [
                                {
                                    type: 'text',
                                    text:
                                        messageConstants.TOTAL_CONFIRMED_PEOPLE,
                                    size: 'lg',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    flex: 0,
                                },
                                {
                                    type: 'text',
                                    text: historyCovid.Confirmed.toLocaleString(),
                                    size: 'lg',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    align: 'end',
                                },
                            ],
                        },
                        {
                            type: 'box',
                            layout: 'horizontal',
                            contents: [
                                {
                                    type: 'text',
                                    text: messageConstants.TOTAL_DEATH_PEOPLE,
                                    size: 'lg',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    flex: 0,
                                },
                                {
                                    type: 'text',
                                    text: historyCovid.Deaths.toLocaleString(),
                                    size: 'lg',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    align: 'end',
                                },
                            ],
                        },
                        {
                            type: 'box',
                            layout: 'horizontal',
                            contents: [
                                {
                                    type: 'text',
                                    text:
                                        messageConstants.TOTAL_RECOVERED_PEOPLE,
                                    flex: 0,
                                    size: 'lg',
                                },
                                {
                                    type: 'text',
                                    text: historyCovid.Recovered.toLocaleString(),
                                    align: 'end',
                                    color: messageConstants.COLOR_CODES.BLACK,
                                    size: 'lg',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'separator',
                    margin: 'xxl',
                    color: messageConstants.COLOR_CODES.DARK_GREEN,
                },
                {
                    type: 'box',
                    layout: 'horizontal',
                    margin: 'md',
                    contents: [
                        {
                            type: 'text',
                            text: messageConstants.REFERENCE,
                            size: 'lg',
                            color: messageConstants.COLOR_CODES.DEEP_BLUE,
                            flex: 0,
                        },
                        {
                            type: 'text',
                            text: messageConstants.DDC,
                            color: messageConstants.COLOR_CODES.DEEP_BLUE,
                            size: 'lg',
                            align: 'end',
                        },
                    ],
                },
            ],
        },
        styles: {
            body: {
                backgroundColor: colorCode,
            },
            footer: {
                separator: true,
            },
        },
    };
}
