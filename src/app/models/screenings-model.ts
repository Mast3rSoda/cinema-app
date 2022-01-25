// movieId: number
// roomId: number
// date: string, format: yyyy-mm-dd
// hour: string, format: hh:mm => will need to convert that to "yyy-mm-ddThh:mm:ss.sssZ" for easier checking
// taken[]: numbers[] - seats taken

export class Screening {
    

    constructor(
        private _movieId: number,
        private _roomId: number,
        private _date: string,
        private _hour: string,
        private _taken: number[]
    ) {}

    public get taken(): number[] {
        return this._taken;
    }
    public set taken(value: number[]) {
        this._taken = value;
    }
    public get hour(): string {
        return this._hour;
    }
    public set hour(value: string) {
        this._hour = value;
    }
    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
    public get roomId(): number {
        return this._roomId;
    }
    public set roomId(value: number) {
        this._roomId = value;
    }
    public get movieId(): number {
        return this._movieId;
    }
    public set movieId(value: number) {
        this._movieId = value;
    }
}