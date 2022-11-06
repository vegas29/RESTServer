require('dotenv').config();
const cors = require('cors')
const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //Lectura y parseo
        this.app.use( express.json() );

        //Directorio público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en el puerto', process.env.PORT);
        });
    }

}

module.exports = Server;