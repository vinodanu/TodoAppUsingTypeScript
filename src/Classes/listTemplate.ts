import { HasFormatter } from '../Model/hasFormatter.interface';
//import { CreateTodo } from './createTodo';

export class ListTemplate {
    constructor(private container : HTMLUListElement) {}
    render(item : HasFormatter){
        const btnUpdate = document.createElement("button");
        btnUpdate.className = "btn btn-warning btn-block"
        btnUpdate.innerHTML = "Update"

        const btnDelete = document.createElement("button");
        btnDelete.className = "btn btn-danger btn-block"
        btnDelete.innerHTML = "Delete"

        const listItem = document.createElement("li");
        listItem.className = "list-group-item"
        const paragraph = document.createElement("p");
        paragraph.innerHTML = item.format();
        listItem.appendChild(paragraph);
        listItem.appendChild(btnUpdate)
        listItem.appendChild(btnDelete)
        this.container.appendChild(listItem);

        // btnUpdate.addEventListener("click", (event : Event) => {
        //    event.preventDefault();
           
        // })

        // btnDelete.addEventListener("click", () => {
        //     console.log("Clicked me !!")
        // })
    }
}