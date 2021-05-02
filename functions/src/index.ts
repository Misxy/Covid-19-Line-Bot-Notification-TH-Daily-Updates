import * as functions from 'firebase-functions';
import { LineClient } from 'messaging-api-line';
import { LineApiService } from './services/LineApiService';
import * as mainService from './services/MainService';
import * as utilsService from './services/UtilsService';
import { ACCESS_TOKEN, ASIA_EAST_2, CHANNEL_SECRET } from './types/Constants';
import { NOT_SERVE } from './types/MessageConstants';

const client: LineClient = new LineApiService(
    ACCESS_TOKEN,
    CHANNEL_SECRET
).getLineClientInstance();

const runtimeOptions: functions.RuntimeOptions = {
    maxInstances: 10,
};
export const lineBot: functions.HttpsFunction = functions
    .region(ASIA_EAST_2)
    .runWith(runtimeOptions)
    .https.onRequest((request, response) => {
        response.send('Welcome message from LINE messaging API.');
        if (request.body.events[0].message.type == 'text') {
            mainService.displayMessageByCondition(client, request);
        } else {
            utilsService.replyOnlyOneMessage(client, request.body, NOT_SERVE);
        }
    });
