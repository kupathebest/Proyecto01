const fs = require("fs");
const tareas = require("./funcionesDeTareas")

const process = require("process")

switch (process.argv[2]) {
    case "agregar":
        tareas.agregar();
        break;
    case "filtrar":
        tareas.filtrarEstado()
        break;
    default:
        console.log("Chau");
        break;
}
