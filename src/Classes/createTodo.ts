import { CreateModel } from "../Model/createTodo.interface";
import { HasFormatter } from "../Model/hasFormatter.interface";

export class CreateTodo implements HasFormatter{
    constructor(private createTodo : CreateModel){}
    format() : string {
        
        return `<p>Todo id : ${this.createTodo.id}</p> <p>Title :  ${this.createTodo.title.toUpperCase()}</p> <p>body : ${this.createTodo.body}</p>`
    }
}