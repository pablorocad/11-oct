const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = 3000;
        
        this.app.use(cors({
            origin: true,
            optionsSuccessStatus: 200
        }));
        this.routes();
        this.listen();
    }

    routes(){
        this.app.use('/api',require('../routes/APIroutes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;