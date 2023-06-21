export interface Item{
    id:string,
    item:string,
    checked:boolean

}

//items in check refers to the getters and setters

export default class ListItem implements Item {
    constructor
      (  private _id:string = "",
        private _item:string = "",
        private _checked:boolean = false,)
    {}

    get id():string{
        return this._id
    }

    get item():string{
        return this._item
    }
    get checked():boolean{
        return this._checked

    }

    // setters
    set item(item:string)
    {
        this._item = item
    }

    set id(id:string)
    {
        this._id = id
    }

    set checked(check:boolean)
    {
        this._checked = check;
    }
}