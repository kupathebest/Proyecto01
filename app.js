const fs = require("fs");
const tareas = require("./tareas.json")

const process = require("process")

switch (process.argv[2]) {
    case "hola":
        console.log("Hola!!!!");
        break;

    default:
        console.log("Chau");
        break;
}
module.exports = {
    tareas: JSON.parse(fs.readFileSync("./tareas.json","utf-8")),
}