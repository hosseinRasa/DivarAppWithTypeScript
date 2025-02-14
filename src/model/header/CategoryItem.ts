export enum CategoryType {
  Car,
  Home,
  Personnal,
  Other,
}
interface CateItem {
  title: string;
  type: CategoryType;
}

export default class CategoryItem implements CateItem {
  constructor(
    public title: string = "",
    public type: CategoryType = CategoryType.Other
  ) {}
}
