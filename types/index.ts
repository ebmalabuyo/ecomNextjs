

export interface Product {
    id: number;
    title: string;
    price: number;
    category:string;
    description:string
    image: string;
    rating?: RatingObject
}

export interface RatingObject {
    rate: number;
    count: number;
}


export interface SubItem {
    name: string;
    action?: () => void
}

export interface DropdownItem {
    title: string;
    subTitles: SubItem[]
}

