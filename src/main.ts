import FullList from "./model/FullList";
import CategoryItem, { CategoryType } from "./model/header/CategoryItem";
import CategoryList from "./model/header/CategoryList";
import ListItem, { Category, ItemLocation, PropType } from "./model/ListItem";
import FullListTemplate from "./template/FullListTemplate";
import CategoryItemTemplate from "./template/Header/category/CategoryItemTemplate";
import CategoryListTemplate from "./template/Header/category/CategoryListTemplate";
import Header from "./template/Header/Header";
import { ListItemTemplate } from "./template/ListItemTemplate";

const App = () => {
  const props: PropType = { prop1: "value1", prop2: "value2", prop3: 1214 };

  //Object.keys(props).map((key) => console.log(key, `${props[key]}`));

  const location: ItemLocation = { city: "یاسوج" };
  const item: ListItem = new ListItem(
    1,
    1,
    Category.Car,
    undefined,
    "موبایل شماره یک",
    "خلی عالیه تازه خریدم",
    location,
    undefined,
    props
  );

  const templateItem:ListItemTemplate = new ListItemTemplate(item);
  FullList.instance.addItem(item);
  FullList.instance.load();
  
  FullListTemplate.instance.addItem(templateItem);
  FullListTemplate.instance.addItem(templateItem);
  FullListTemplate.instance.addItem(templateItem);
  FullListTemplate.instance.addItem(templateItem);
  FullListTemplate.instance.addItem(templateItem);
  FullListTemplate.instance.addItem(templateItem);
  FullListTemplate.instance.addItem(templateItem);
  FullListTemplate.instance.addItem(templateItem);

  const ul: HTMLUListElement =  FullListTemplate.instance.render() as HTMLUListElement;


  const appEl: HTMLDivElement = document.getElementById('app') as HTMLDivElement;

  Header.instance.logo = document.createElement('img') 
  Header.instance.logo.src = 
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E2MjYyNiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4zODYgMTQuNjE3SDguMjhhLjcxMi43MTIgMCAwIDEtLjU5NS0uODA2Yy40NzMtMy4xMTcuNjMtOC4wOTIuNjMtOC4xMjcuMDM1LS4zODYuMzMzLS43LjczNi0uNjgzYS43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjIxLS4xNzUgNS4wOTctLjY0OCA4LjMwM2EuNy43IDAgMCAxLS43LjU5NVptMTAuMDM3IDEuMjk2YS42OTMuNjkzIDAgMCAxLS42NjYtLjQ5LjY4OC42ODggMCAwIDEgLjQ1NS0uODc2YzMuMzEtMS4wNSAzLjM2My0xLjg1NyAzLjM4MS0yLjI5NS4wMzUtLjY4My0uNDktMS41NTgtLjctMS44NTZhLjcwMS43MDEgMCAxIDEgMS4xMzgtLjgyNGMuMTA1LjE0IDEuMDUgMS40NTQuOTYzIDIuNzY4LS4wODcgMS41OTQtMS4zMTQgMi41NzUtNC4zNjEgMy41NTZhLjg0NS44NDUgMCAwIDAtLjEwNS4wMDljLS4wMzUuMDA0LS4wNy4wMDktLjEwNS4wMDlabS05LjUxMiAyLjQ3YS42NTYuNjU2IDAgMCAxLS41NDMtLjI2Mi42ODMuNjgzIDAgMCAxIC4xMjMtLjk4MWMxLjQzNi0xLjEzOSAyLjQtMi4xNTUgMy4wMy0zLjA0OC0uMzUtLjE3NS0uNzE4LS40MzgtLjkxLS44NzYtLjE3Ni0uNDAzLS4yODEtMS4wNjkuMzMyLTEuOTYyLjg3Ni0xLjI5NiAxLjc1Mi0xLjU5NCAyLjA4NC0xLjY2NGEuODcxLjg3MSAwIDAgMSAxLjAxNi42MTNjLjA4OC4zMTUuMjk4IDEuMzE0LS4zMzIgMi44MzguODQtLjAxOCAxLjUwNi0uMjQ1IDIuMDE0LS42NjYuOTgtLjc4OCAxLjAzMy0yLjEyIDEuMDMzLTIuMTM3YS43MTUuNzE1IDAgMCAxIC43MTktLjY4My43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjA3LS4wNyAxLjk0NC0xLjUyNCAzLjE3LS45MTEuNzcxLTIuMTU1IDEuMTA0LTMuNjYxLjk4Mi0uNzE4IDEuMTAzLTEuODU3IDIuNC0zLjYyNiAzLjhhLjcwOC43MDggMCAwIDEtLjQzOC4xNThabTMuODAxLTcuMDc2YTMuMTM0IDMuMTM0IDAgMCAwLS42My43MzVjLS4yMjguMzUtLjI0Ni41NDMtLjIyOC41OTYuMDM1LjA4OC4yMS4xNzUuMzg1LjI0NS4zMzMtLjY2NS40MzgtMS4xOTEuNDczLTEuNTc2Wm0uMTc1IDQuOTIyYS43MS43MSAwIDAgMCAuNy42ODNoLjAzNmMuMDUzIDAgMS4yMjYtLjAzNSAyLjkwOC0uNDJhLjcwMi43MDIgMCAwIDAgLjU0My0uODQxLjcwMi43MDIgMCAwIDAtLjg0MS0uNTQzYy0xLjU2LjMzMi0yLjY2My4zODUtMi42OC4zODVhLjcwNC43MDQgMCAwIDAtLjY2Ni43MzZaTTEuMTM0IDE4LjEwM2MuMTIyLjE3NS4zNS4yOC41Ni4yOC4xNCAwIC4yOC0uMDM1LjQyLS4xMjIgNC40NS0zLjI0IDQuNjI1LTcuNDggNC42MjUtNy42NTUgMC0uMzg1LS4yOTgtLjctLjY4My0uNzE4LS4zODYtLjAxOC0uNy4yOTgtLjcxOC42ODMgMCAuMTQtLjE3NiAzLjczMS00LjA0NyA2LjU1MWEuNzAxLjcwMSAwIDAgMC0uMTU3Ljk4MVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=='
  CategoryList.instance.addItem(new CategoryItem('علی رحمان', CategoryType.Car))
  CategoryListTemplate.instance.categoryList = CategoryList.instance

  appEl.append(Header.instance.render())
  appEl.append(ul);


  
  // FullList.instance.list.forEach((item) =>
  //   console.log(
  //     item.id,
  //     item.title,
  //     item.content,
  //     item.otherProperties
  //     //Object.keys( item.otherProperties)[0], Object.values( item.otherProperties)[0])
  //   )
  // );
};

document.addEventListener("DOMContentLoaded", App);
