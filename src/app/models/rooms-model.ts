// id?:number optional
// room Number: number - pretty much id
// capacity: number


export class Room {
    

    constructor(
        private _roomNumber: number,
        private _capacity: number,
    ) {}

    public get capacity(): number {
        return this._capacity;
    }
    public set capacity(value: number) {
        this._capacity = value;
    }
    public get roomNumber(): number {
        return this._roomNumber;
    }
    public set roomNumber(value: number) {
        this._roomNumber = value;
    }
}