const argv  = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');

console.clear();

//llamar a la funcion
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(msg => console.log(msg));
