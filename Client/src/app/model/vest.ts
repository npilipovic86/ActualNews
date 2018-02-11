import { Kategorija } from "app/model/kategorija";



export interface Vest {
    id?: number;
    name: string;
    category?: Kategorija;
    about: string;
    content: string;

}