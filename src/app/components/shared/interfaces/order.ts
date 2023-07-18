export interface Order {

    id: string;
    seller:String;
    client:String;
    model:String;
    units:number;
    discount:number;
    total:number;
    creationDate:Date;
    
}