const opcionesCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripción de una tarea"
    }
};

const opcionesActualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripción de una tarea"
    },
    completado: {
        alias: 'c',
        default: true,
        desc: "Marca como completado o pendiente la tarea"
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opcionesCrear).help()
    .command('listar', 'Imprime en consola las tareas y su estatus', {}).help()
    .command('actualizar', 'Actualiza el estado completado de una tarea', opcionesActualizar).help()
    .command('borrar', 'Borrar una tarea de la lista', opcionesCrear).help()
    .argv;

module.exports = {
    argv
}