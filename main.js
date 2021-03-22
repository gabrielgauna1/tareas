const boton = document.getElementById("add")
const titulo = document.getElementById("title")
const descripcion = document.getElementById("description")
const homeworks = document.getElementById("table")
const alerta = document.getElementById("alert")

let id = 0

boton.onclick = () => crearFila({
    titulo: titulo.value,
    descripcion : descripcion.value,
    id: id++
})

function eliminarTarea(id){
    document.getElementById(id).remove()
}

function crearFila(tarea){

    const { titulo, descripcion,id } = tarea

    if(titulo !== "" || descripcion !== "") {
        alerta.classList.add("d-none")

        const fila = homeworks.insertRow()

        fila.setAttribute("id", id)
        
        fila.innerHTML = `
            <td>${titulo}</td>
            <td>${descripcion}</td>
            <td class="text-center">
            <input type="checkbox" />
            </td>
            <td class="text-right">
            <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
        </button>
            </td>
        `

        const eliminar = document.createElement("button")
        eliminar.classList.add("btn", "btn-danger", "mb-1", "ml-1")
        eliminar.innerHTML = "<i class='fa fa-trash'></i>"   

        fila.children[3].appendChild(eliminar)

        eliminar.onclick = () => eliminarTarea(id)
        
    } else {
        alerta.classList.remove("d-none")
        alerta.innerText = "Rellena los campos o te rompo la cabeza capo"
    }
}