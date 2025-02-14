import ListItem from "../model/ListItem";

interface ItemTemplate{
    listItem: ListItem,
    render: () => HTMLElement,
}

export class ListItemTemplate implements ItemTemplate{

    constructor(
      
        // private _li: HTMLLIElement = document.createElement('li'),
        private _listItem: ListItem = new ListItem()
    ) {}
    // get li(): HTMLLIElement{
    //     return this._li;
    // }
    // set li(value: HTMLLIElement){
    //     this._li = value;
    // }


    get listItem(): ListItem{
        return this._listItem;
    }
    set listItem(value: ListItem){
        value = this._listItem;
    }

    render(): HTMLElement {
        const div: HTMLDivElement = document.createElement('div');
        
        div.style.border = '2px dotted grey';
        div.style.padding = '2px';
        div.style.margin = '2px';
        div.style.cursor = 'pointer'


        div.id = 'item'
     
        const p: HTMLParagraphElement = document.createElement('p');
        p.style.padding = '10px'
        p.textContent = this.listItem.title;
        div.append(p)

        return div;

    }

}