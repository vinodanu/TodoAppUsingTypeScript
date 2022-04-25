import { CreateTodo } from "./Classes/createTodo.js"
import { CreateModel } from "./Model/createTodo.interface"
import { HasFormatter } from "./Model/hasFormatter.interface"
import { ListTemplate } from "./Classes/listTemplate.js"


window.onload = () => {
    const btnCreateTodo = document.getElementById("btnCreateTodo") as HTMLButtonElement
    const txtId = document.getElementById("txtId") as HTMLInputElement
    const txtTitle = document.getElementById("txtTitle") as HTMLInputElement
    const txtBody = document.getElementById("txtBody") as HTMLInputElement
    const uList = document.getElementById("list") as HTMLUListElement
    const renderList = new ListTemplate(uList);
    // const btnUpdate = document.getElementById("btnUpdate") as HTMLButtonElement

    btnCreateTodo.addEventListener("click", (event : Event) => {
        event.preventDefault();

        let todo : CreateModel = {

            id : txtId.value,
            title : txtTitle.value,
            body : txtBody.value
        }
            let doc : HasFormatter;
            doc = new CreateTodo(todo)
            renderList.render(doc)
    })

}