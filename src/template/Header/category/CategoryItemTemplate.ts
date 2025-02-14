import CategoryItem from "../../../model/header/CategoryItem";

interface ICategoryItemTemplate{
    cateTemplateItem: CategoryItem,
    render: () => HTMLLIElement
    
}

export default class CategoryItemTemplate implements ICategoryItemTemplate{
   
    constructor(
  
        private _cateTemplateItem: CategoryItem = new CategoryItem()

    ) {
       
       
    }

    get cateTemplateItem(): CategoryItem{
        return this._cateTemplateItem;
    }

    set cateTemplateItem(value: CategoryItem){
        value = this._cateTemplateItem
    }
    render(): HTMLLIElement{
        const li: HTMLLIElement = document.createElement('li');
        li.textContent = this.cateTemplateItem.title;

        return li;
        
    }
}