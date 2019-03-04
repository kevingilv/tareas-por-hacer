const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear por hacer...');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            let color = tarea.completado ? 'green' : 'red';
            console.log("-------tarea---------");
            console.log(`Descripción: ${tarea.descripcion}`);
            if (tarea.completado) {
                console.log(`Completado: ${tarea.completado}`.green);
            } else {
                console.log(`Completado: ${tarea.completado}`.magenta);
            }
            console.log("---------------------");
        }
        break;
    case 'actualizar':
        console.log('actualizar una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('borrar una tarea');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log(`${ comando } no es un comando reconocido`);
        break;
}