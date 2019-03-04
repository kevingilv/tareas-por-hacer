const fs = require('fs');

let listadoPorHacer = [];
let nombreArchivo = 'fake-db/data.json';

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(nombreArchivo, data, (err) => {
        if (err) { throw new Error("Error al grabar ", err); };
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../fake-db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB(porHacer);

    return porHacer;
}

let actualizar = (descripcion, completado) => {
    cargarDB();
    //console.log(listadoPorHacer);
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

let borrar = (descripcion) => {
    cargarDB();
    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    // if (index >= 0) {
    //     listadoPorHacer.splice(index, 1);
    //     guardarDB();
    //     return true;
    // } else {
    //     return false;
    // }
    let nuevoListado = listadoPorHacer.filter(tarea => {
        tarea.descripcion !== descripcion
    });

    if (nuevoListado.length === listadoPorHacer) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}