// Movies model
// ---------------------------------------------------------------- 
// id: int [array pos] - not sure if id is needed
// title: string
// duration: number
// description: string
// image: string
// trailer: string

export class Movie {
    
    private _id: number;

    constructor(
        private _title: string,
        private _duration: number,
        private _description: string,
        private _image: string,
        _id?: number,
        ) {
        if(_id)
            this._id = _id;
        else
            this._id = 0;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get duration(): number {
        return this._duration;
    }
    public set duration(value: number) {
        this._duration = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    
}