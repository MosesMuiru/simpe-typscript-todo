import ListItem from "./ListItem";

interface List {
    lists:ListItem[];
    load():void
    save():void
    addItem(objList:ListItem):void
    removeItem(id:string):void
    clearList:void
}

export default class FullList implements List{

    // create an instance of the class
    static instanceList = new List
    // constructor that implements the list class above

    constructor(private _list:ListItem[] =[]){}
}