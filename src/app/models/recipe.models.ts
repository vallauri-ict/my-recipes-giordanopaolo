export class RecipeModels{
    public id : number;
    public name : string;
    public description : string;
    public imagePath : string;

    constructor(id:number, name : string, img : string, desc : string){
        this.id = id;
        this.name = name;
        this.imagePath = img;
        this.description = desc;
    }
}