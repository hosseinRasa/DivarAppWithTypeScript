import CategoryList from "../../../model/header/CategoryList";
import CategoryItemTemplate from "./CategoryItemTemplate";

 

interface ICategoryListTemplate{
    categoryList: CategoryList,
    //addItem: () => void,
    render: () => HTMLUListElement,

}

export default class CategoryListTemplate implements ICategoryListTemplate{
  
    categoryList: CategoryList;
    static instance: CategoryListTemplate = new CategoryListTemplate()
    constructor() {
         this.categoryList = CategoryList.instance
    }

    render(): HTMLUListElement{
      const ul: HTMLUListElement = document.createElement('ul')

      this.categoryList.categoryList.forEach(
        item => ul.append(new CategoryItemTemplate(item).render())
      )

      return ul;
    }

}