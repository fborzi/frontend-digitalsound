export class Imagen{
    id?: number;
    name: string = "";
    imageUrl: string = "";
    imageId: string = "";

    constructor(name: string, imageUrl: string, imageId: string){
        this.name = name;
        this.imageUrl = imageUrl;
        this.imageId = imageId;
    }
}

