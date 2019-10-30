const Express = require("express");

class Routes {
    constructor() {
        this.express = Express;
        this.routes = this.express.Router();
        this.defineRoutes();
    }

    defineRoutes() {
        this.routes.get("/", (req, res) => {
            return res.send("Server Running...");
        });
    }
}

module.exports = new Routes().routes;
