const process = require("process");
const comando = process.argv[2];
const titulo = process.argv[3];
const estado = process.argv[4];
const tareas = require("./funcionesDeTareas.js")


switch (comando) {
    case "agregar":
        tareas.agregar(titulo,estado);
        break;    
    case "listar":
        tareas.listar();
        break; 
        case undefined:
            console.log("***Atencion - tienes que pasar una accion***");
            break;
        case 'filtrarEstado':
          if(process.argv[3] == undefined){
               console.log('***No hay resultados para tu búsqueda***');
         }else{
            console.log('***Estos son los estados que coinciden con tu busqueda***');
            console.log(tareas.filtrarEstado(process.argv[3]));
                };
            break;
        case "filtrarTitulo":
            if(process.argv[3] == undefined){
                console.log('***No hay resultados para tu búsqueda***');
          }else{
             console.log('***Estos son los titulos que coinciden con tu busqueda***');
             console.log(tareas.filtrarTitulo(process.argv[3]));
                 };
            break;            
    default:
        console.log("No se que quieres hacer");
        break;
}