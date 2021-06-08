const fs = require("fs");
const tareas = require("./tareas.json")

module.exports = {
    tareas: JSON.parse(fs.readFileSync("./tareas.json","utf-8")),
}