 
import { ListItemTemplate } from "./ListItemTemplate";

interface listTemplate{
    addItem(listItemTemplate: ListItemTemplate): void,
    listItemTemplate: ListItemTemplate[],
    clearList: () => void,
    render: () => HTMLElement,
}

export default class FullListTemplate implements listTemplate{
    static instance: FullListTemplate = new FullListTemplate();
    private constructor(private _listItemTemplate: ListItemTemplate[] = []) {
        
        
    }

    get listItemTemplate(): ListItemTemplate[]{
        return this._listItemTemplate;
    }
    set listItemTemplate(value: ListItemTemplate[]){
        this._listItemTemplate = value
    }
    addItem(listItemTemplate: ListItemTemplate): void{
        this._listItemTemplate.push(listItemTemplate)
    }
    clearList() {
        this._listItemTemplate = []
    };
    render(): HTMLElement {

        const ul: HTMLUListElement = document.createElement('ul');
    
       
        ul.style.marginBottom = '20px'
        ul.style.padding = '1rem'
        ul.style.display = 'grid'
        ul.style.gridTemplateColumns = 'repeat(auto-fit, minmax(20rem, 1fr))'
        // ul.style.flexWrap = 'wrap'

        
        
        
        this._listItemTemplate.forEach(
           item => ul.append(item.render())
        )

        return ul

    };

}