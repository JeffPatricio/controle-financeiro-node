const Express = require("express");
const Routes = require("../routes/Routes");
const Path = require("path");
require('dotenv/config');

class App {
    constructor() {
        this.express = Express;
        this.path = Path;
        this.routes = Routes;
        this.server = Express();
    }

    initializeServer() {
        this.configureMiddlewares();
        this.configureRoutes();
        this.configurePort();
        this.configureViews();
    }

    configurePort() {
        this.server.listen(process.env.SERVER_PORT, () => {
            console.log(`Server running in port ${process.env.SERVER_PORT}...`);
        });
    }

    configureMiddlewares() {
        this.server.use(this.express.urlencoded({ extended: false }));
        this.server.use(this.express.json());
    }

    configureRoutes() {
        this.server.use(this.routes);
    }

    configureViews() {
        this.server.use("/public", this.express.static(this.path.resolve(__dirname, "..", "..", "public")));
    }
}

module.exports = new App();