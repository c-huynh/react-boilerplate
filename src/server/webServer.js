const express = require('express');

export default class Server {
    constructor() {
        this.app = express();
        this.app.use(express.static('dist/public'));

        //404 Not Found Middleware
        this.app.use(function (req, res, next) {
            res.status(404)
                .type('text')
                .send('Not Found');
        });
    }

    start() {
        return new Promise((resolve, reject) => {
            try {
                this.server = this.app.listen(3000, function () {
                    resolve();
                })
            } catch (e) {
                console.error(e);
                reject(e);
            }
        })
    }

    stop() {
        return new Promise((resolve, reject) => {
            try {
                this.server.close(() => {
                    resolve();
                })
            } catch (e) {
                console.error(e.message);
                reject(e);
            }
        })
    }
}