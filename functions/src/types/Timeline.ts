import { HistoryCovid } from './HistoryCovid';

export class Timeline {
    UpdateDate: string;
    Data: HistoryCovid[];

    constructor(updateDate: string, data: HistoryCovid[]) {
        this.UpdateDate = updateDate;
        this.Data = data;
    }
}
