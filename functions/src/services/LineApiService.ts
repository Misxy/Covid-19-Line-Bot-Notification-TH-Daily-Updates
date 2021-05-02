import { LineClient } from 'messaging-api-line';

export class LineApiService {
    private accessToken: string;
    private channelSecret: string;

    constructor(accessToken: string, channelSecret: string) {
        this.accessToken = accessToken;
        this.channelSecret = channelSecret;
    }

    getLineClientInstance(): LineClient {
        return new LineClient({
            accessToken: this.accessToken,
            channelSecret: this.channelSecret,
        });
    }
}
