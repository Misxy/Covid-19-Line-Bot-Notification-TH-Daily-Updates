export class HistoryCovid {
    Date: string;
    NewConfirmed: number;
    NewRecovered: number;
    NewHospitalized: number;
    NewDeaths: number;
    Confirmed: number;
    Recovered: number;
    Hospitalized: number;
    Deaths: string;

    constructor(
        date: string,
        newConfirmed: number,
        newRecovered: number,
        newHospitalized: number,
        newDeaths: number,
        confirmed: number,
        recovered: number,
        hospitalized: number,
        deaths: string
    ) {
        this.Date = date;
        this.NewConfirmed = newConfirmed;
        this.NewRecovered = newRecovered;
        this.NewHospitalized = newHospitalized;
        this.NewDeaths = newDeaths;
        this.NewConfirmed = newConfirmed;
        this.Confirmed = confirmed;
        this.Recovered = recovered;
        this.Hospitalized = hospitalized;
        this.Deaths = deaths;
    }
}
