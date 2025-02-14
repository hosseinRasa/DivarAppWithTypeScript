import ListItem, { ListItemPrivateType } from "./ListItem";

interface List{
    list: ListItem[],
    load: () => void,
    save: () => void,
    clearList: () => void,
    removeItem: (id: number) => void,
    addItem: (itemObj: ListItem) => void,
}

export default class FullList implements List{
    public static instance: FullList = new FullList();
    private constructor(
        private _list: ListItem[] = []
    ) {
        
        
    }

    get list(): ListItem[] {
            return this._list;
    }

    set list(value: ListItem[]){
        value = this._list
    }
    save(): void{
        localStorage.setItem('fullList', JSON.stringify(this._list))
    }
    clearList(): void{
        this._list = []
        this.save();

    };
    addItem(item: ListItem): void {
       this._list.push(item)
       this.save()
    }
    removeItem(id: number) {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }

    load() {
        this._list = []
        const storageString: string | null = localStorage.getItem('fullList')
        if(typeof storageString !== 'string') return;
        const deserilizedList: ListItemPrivateType[] = JSON.parse(storageString) as ListItemPrivateType[]


        deserilizedList.forEach(
            
            desItem =>
             {
            this._list.push(
                 new ListItem(
                    desItem._id,
                    desItem._author,
                    desItem._category,
                    desItem._image,
                    desItem._title,
                    desItem._content,
                    desItem._location,
                    desItem._createDate,
                    desItem._otherProperties
                 )
            )}
        )
        
    }
    
}