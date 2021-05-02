export class Vaccine {
    UpdatedDate: string;
    NewFirstDoses: string;
    NewSecondDoses: string;
    AllNewDoses: string;
    AccumulatedFirstDosesPercent: string;
    AccumulatedSecondDosesPercent: string;
    AllAccumulatedDosesPercent: string;

    constructor(
        updatedDate: string,
        newFirstDoses: string,
        newSecondDoses: string,
        allNewDoses: string,
        accumulatedFirstDosesPercent: string,
        accumulatedSecondDosesPercent: string,
        allAccumulatedDosesPercent: string
    ) {
        this.UpdatedDate = updatedDate;
        this.NewFirstDoses = newFirstDoses;
        this.NewSecondDoses = newSecondDoses;
        this.AllNewDoses = allNewDoses;
        this.AccumulatedFirstDosesPercent = accumulatedFirstDosesPercent;
        this.AccumulatedSecondDosesPercent = accumulatedSecondDosesPercent;
        this.AllAccumulatedDosesPercent = allAccumulatedDosesPercent;
    }
}
