import { Category } from './category';
import { Subcategory } from './subcategory';

export class Product{
    id: number = 0;
    code: number = 0;
    category!: Category; //{ id: number; }; // RUBRO
    subcategory!: Subcategory; //{ id: number; }; // SUBRUBRO
    brand!: { id: number };
    model: string = '';
    name: string = '';
    description: string = '';
    price: number = 0;
    cost: number = 0;
    tax: number = 0;
    image: string = '';
    image1: string = '';
    stock: number = 0;
    isActive: number = 1;
    //subrubro!: { id: number; };

    constructor(
        id: number,
        code: number,
        category: Category, // { id: number; }, // RUBRO
        subcategory: Subcategory, // { id: number; }, // SUBRUBRO
        brand: { id: number; },
        model: string,
        name: string,
        description: string,
        price: number,
        cost: number,
        tax: number,
        image: string,
        image1: string,
        stock: number,
        isActive: number
    ){
        this.id = id;
        this.code = code;
        this.category = category;
        this.subcategory = subcategory;
        this.brand = brand;
        this.model = model;
        this.name = name;
        this.description = description;
        this.price = price;
        this.cost = cost;
        this.tax = tax;
        this.image = image;
        this.image1 = image1;
        this.stock = stock;
        this.isActive = isActive;
    }
    
}