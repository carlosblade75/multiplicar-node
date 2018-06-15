const fs = require('fs');

let listarTabla = (base, limite = 10) => { // estos es por es6 valores por defecto

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducidoo (${base}) no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        resolve(data);
    });
};

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducidoo (${base}) no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else {
                resolve(`tabla-${base}.txt`);
            }
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla // gracias a ES6 => crearArchivo:crearArchivo
};