import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Covid } from '../types/Covid';
import { Timeline } from '../types/Timeline';

export class CovidService {
    private axiosInstance: AxiosInstance;
    constructor(baseURL: string) {
        this.axiosInstance = axios.create({ baseURL: baseURL });
    }

    async getTodayOverall(): Promise<AxiosResponse<Covid>> {
        try {
            return await this.axiosInstance
                .get('/today')
                .then((res: AxiosResponse<Covid>) => res);
        } catch (error) {
            return error.response.status;
        }
    }

    async getHistoricalTimeline(): Promise<AxiosResponse<Timeline>> {
        try {
            return await this.axiosInstance
                .get('/timeline')
                .then((res: AxiosResponse<Timeline>) => res);
        } catch (error) {
            return error.response.status;
        }
    }
}
