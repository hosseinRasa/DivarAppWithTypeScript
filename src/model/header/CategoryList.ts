import CategoryItem from "./CategoryItem";
 

 

interface CategoryItems{
    categoryList: CategoryItem[]
    addItem: (item: CategoryItem) => void
}

export default class CategoryList implements CategoryItems{
    static instance: CategoryList = new CategoryList();
   categoryList: CategoryItem[];
   private constructor() {
        this.categoryList = [];
        
    }
    addItem(item: CategoryItem): void{
            this.categoryList.push(item)
    }

}