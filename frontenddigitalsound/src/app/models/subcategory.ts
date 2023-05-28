export class Subcategory {
    id?: number;
    name: string = '';
    category!: {
        id: number;
        name: string;
    }
    //constructor(name: string){
    //    this.name = name;
    //}

    constructor() { };
}