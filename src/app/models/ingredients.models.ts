export class IngredientsModels{
    //public id : number;
    public name : string;
    public amount : number;

    constructor(name : string, amount : number){
        this.name = name;
        this.amount = amount;
    }
}