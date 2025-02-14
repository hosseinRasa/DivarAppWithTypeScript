import CategoryListTemplate from "./category/CategoryListTemplate";

interface IHeader{
    logo: HTMLImageElement,
    categoryList: CategoryListTemplate;
    render: () => HTMLHeadElement

    
}
export default class Header implements IHeader{
    logo: HTMLImageElement;
    categoryList: CategoryListTemplate;
    static instance: Header = new Header();
    constructor( ) {
      this.logo = document.createElement('img');
      this.categoryList = CategoryListTemplate.instance 
        CategoryListTemplate

        
    }
    render(): HTMLHeadElement{
        const header: HTMLHeadElement = document.createElement('header');

        //right div start
        const rightDiv: HTMLDivElement = document.createElement('div');
        rightDiv.id = 'right-div';


        this.logo.width = 50;
        this.logo.height = 50;
        this.logo.style.borderRadius = '50%'
        rightDiv.append(
            this.logo
        )
        rightDiv.append('|')
        const locationButton = document.createElement('button')
        locationButton.id = 'location-btn'
        const cityName: string = 'تهران'
        locationButton.innerHTML  = '<i class="fa fa-map-marker" aria-hidden="true">&nbsp</i> ' + cityName
        locationButton.style.padding = '0.5em 2em'
        locationButton.style.border = 'none'
        locationButton.style.cursor = 'pointer'
        locationButton.style.backgroundColor = 'transparent'
        locationButton.style.color = "gray"

        rightDiv.append(locationButton)
        const categoryButton = document.createElement('button')
        categoryButton.id = 'location-btn'
     
        categoryButton.innerHTML  = '<span>دسته ها &nbsp</span><i class="fa fa-angle-down" aria-hidden="true">&nbsp</i> '
        categoryButton.style.padding = '0.5em 2em'
        categoryButton.style.border = 'none'
        categoryButton.style.cursor = 'pointer'
        categoryButton.style.backgroundColor = 'transparent'
        categoryButton.style.color = "gray"

        rightDiv.append(categoryButton)


        const searchDiv = document.createElement('div')
        searchDiv.style.padding = '1em'
        searchDiv.id = 'search-div'

        const searchIcon = document.createElement('i')
        searchIcon.className = 'fa fa-search';
        // '<i class="fa fa-search" aria-hidden="true"></i>';
        const searchInput = document.createElement('input')

        searchInput.type = 'text'
        searchInput.placeholder = 'جستجو در همه آگهی ها'

        searchInput.id = 'search-input'

        searchDiv.append(searchInput)
        searchDiv.append(searchIcon)
        rightDiv.append(searchDiv)
        rightDiv.style.display = 'flex'
        rightDiv.style.alignItems = 'center'

        ///right div end
        ///left div start
const leftDiv: HTMLDivElement = document.createElement('div')
leftDiv.style.display = 'flex'
leftDiv.style.flexFlow = 'row-reverse'
leftDiv.style.gap = '0.5em'
const registerReportBtn: HTMLButtonElement = document.createElement('button')
registerReportBtn.textContent = 'ثبت آگهی'
registerReportBtn.style.backgroundColor = 'red'
registerReportBtn.style.color = 'green'
registerReportBtn.style.border = 'none'
registerReportBtn.style.borderRadius = '5px'
registerReportBtn.style.padding = '0.5em 2em'

const supportBtn: HTMLButtonElement = document.createElement('button')
supportBtn.innerHTML = 'پشتیبانی <i class="fa fa-delicious" aria-hidden="true">&nbsp</i>'
supportBtn.style.border = 'none'
supportBtn.style.backgroundColor = 'transparent'


const chatBtn: HTMLButtonElement = document.createElement('button')
chatBtn.innerHTML = 'چت <i class="	fa fa-comment" aria-hidden="true">&nbsp</i>'
chatBtn.style.border = 'none'
chatBtn.style.backgroundColor = 'transparent'
const myDivarBtn: HTMLButtonElement = document.createElement('button')
myDivarBtn.innerHTML = 'دیوار من <i class="fa fa-user" aria-hidden="true">&nbsp</i>' 
myDivarBtn.style.border = 'none'
myDivarBtn.style.backgroundColor = 'transparent'
myDivarBtn.style.color = 'gray'
supportBtn.style.color = 'gray'
chatBtn.style.color = 'gray'


leftDiv.append(registerReportBtn, supportBtn, chatBtn, myDivarBtn)

        header.append(rightDiv)
        header.append(leftDiv)
        // header.append(rightDiv)

        header.style.display = 'flex'
        header.style.alignItems = 'center'
        header.style.gap = '1rem'
        header.style.padding = '0.5rem'
        header.style.borderBottom = '1px solid grey'
        header.style.color = 'gray'
        header.style.justifyContent = 'space-around '


        

        return header;
    }
}