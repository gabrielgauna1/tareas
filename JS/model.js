export default class Model{
    constructor(){
        this.view = null
        this.tareas = []
        this.nowId = 0
    }

    crearTarea(tarea){
    const {titulo, descripcion} = tarea
    const nuevaTarea =  {
        id: this.nowId++,
        titulo,
        descripcion,
        completo: false
    }

    this.tareas.push(nuevaTarea) // [--vacio--] => [... final > nuevaTarea]
    return {...nuevaTarea}
    }
}