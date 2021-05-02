export class Covid {
    Confirmed: number;
    Recovered: number;
    Hospitalized: number;
    Deaths: number;
    NewConfirmed: number;
    NewRecovered: number;
    NewHospitalized: number;
    NewDeaths: number;
    UpdateDate: string;

    constructor(
        confirmed: number,
        recovered: number,
        hospitalized: number,
        deaths: number,
        newConfirmed: number,
        newRecovered: number,
        newHospitalized: number,
        newDeaths: number,
        updateDate: string
    ) {
        this.Confirmed = confirmed;
        this.Recovered = recovered;
        this.Hospitalized = hospitalized;
        this.Deaths = deaths;
        this.NewConfirmed = newConfirmed;
        this.NewRecovered = newRecovered;
        this.NewHospitalized = newHospitalized;
        this.NewDeaths = newDeaths;
        this.UpdateDate = updateDate;
    }
}
