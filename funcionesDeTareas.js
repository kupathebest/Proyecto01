const tareas = require("./tareas.json");

module.exports = {
    tareas: JSON.parse(fs.readFileSync("./tareas.json","utf-8")),
    agregar : function(titulo,estado){
        let tarea = {
            titulo,
            estado,
        }
        this.tareas.push(tarea)
        this.guardar(this.tareas)
        this.mensaje('Estado de tarea agregado satisfactoriamente')

    },
guardar : function(tareas){
    fs.writeFileSync("./tareas.json",JSON.stringify(tareas,null,2),"utf-8")
},
mensaje : texto => console.log(`******${texto}******`),

filtrarEstado : (estado) => lista.filter(tarea => tarea.estado == estado),

filtrarTitulo : (titulo) => lista.filter(tarea => tarea.titulo == titulo),

listar : function (tareas = this.tareas){
   for (let i = 0; i < tareas.length; i++) {
       console.log(`Titulo: ${tareas[i].titulo}, Estado: ${tareas[i].estado}`);  
   }
}
}