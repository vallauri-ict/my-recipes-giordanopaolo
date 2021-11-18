export class RecipeModels{
    //public id : number;
    public name : string;
    public description : string;
    public imagePath : string;

    constructor(name : string, img : string, desc : string){
        this.name = name;
        this.imagePath = img;
        this.description = desc;
    }
}