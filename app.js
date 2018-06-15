const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js'); // <= gracias a la DESTRUCTURACION podemos coger las propiedades 

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(
                resp => {
                    console.log('=================='.green);
                    console.log(`=== tabla de ${ argv.base } ===`.red);
                    console.log('=================='.green);
                    console.log(`${resp}`);
                }
            ).catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(
                resp => console.log('Archivo creado: ' + colors.green('%s'), resp)

            ).catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
        break;
}

// console.log(module);
// console.log(process);