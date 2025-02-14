 
export enum Category{
    Car,
    Personal,
    Habbit,
    Electronic,
    Home,
    Cloth,
    Other,
}
export interface ItemLocation{
    city?: string,
    town?: string,
    geoPos?: [number, number]
}
 
export type PropType = Record<string, number|string>
interface Item{
    id: number,
    author: number,
    category: Category,
    image?: HTMLImageElement,
    title: string,
    content: string,
    location: ItemLocation,
    createDate: number,
    otherProperties: PropType
}

export type ListItemPrivateType = {
      _id: number,
      _author: number ,
      _category: Category ,
      _image?: HTMLImageElement,
      _title: string,
      _content: string,
      _location: ItemLocation,
      _createDate: number ,
      _otherProperties: PropType
}
export default class ListItem implements Item{

    constructor(
        private _id: number = 0,
        private _author: number = 0,
        private _category: Category = Category.Other,
        private _image?: HTMLImageElement,
        private _title: string = '',
        private _content: string = '',
        private _location: ItemLocation = {},
        private _createDate: number = new Date().getDate(),
        private _otherProperties: PropType
        = {},

    ) {}

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    get author(): number {
        return this._author;
    }
    set author(value: number) {
        this._author = value;
    }

    get category(): Category {
        return this._category;
    }
    set category(value: Category) {
        this._category = value;
    }

    get image(): HTMLImageElement | undefined {
        return this._image;
    }
    set image(value: HTMLImageElement) {
        this._image = value;
    }

    get title(): string {
        return this._title;
    }
    set title(value: string) {
        this._title = value;
    }

    get content(): string {
        return this._content;
    }
    set content(value: string) {
        this._content = value;
    }
    get location(): ItemLocation {
        return this._location;
    }
    set location(value: ItemLocation) {
        this._location = value;
    }

    get createDate(): number {
        return this._createDate;
    }
    set createDate(value: number) {
        this._createDate = value;
    }

    get otherProperties(): PropType {
        return this._otherProperties;
    }
    set otherProperties(value: PropType) {
        this._otherProperties = value;
    }

 

}