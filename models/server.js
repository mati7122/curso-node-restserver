
const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express()
        this.PORT = process.env.PORT
        this.usersRoutePATH = '/api/users'

        //middlewares
        this.middlewares()
        //Rutas de mi app


        this.routes()
    }

    middlewares() {
        //CORS
        this.app.use(cors())
        //Lectura y parseo del body
        this.app.use(express.json()) //Serializa la informacion que envia el usuario y la parsea
        //Directorio publico
        this.app.use(express.static('public')) //use indica como parametro un middleware
    }

    routes() {
        this.app.use(this.usersRoutePATH, require('../routes/users'))
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('Server listen: ', this.PORT)
        })
    }

}

module.exports = { Server }