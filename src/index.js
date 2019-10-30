const Server = require("./server/App");

class Main {
    constructor() {
        this.server = Server;
        this.start();
    }

    start() {
        try {
            this.server.initializeServer();
        } catch (e) {
            console.log("Error: ",e);
            console.log("Terminating server execution...");
            process.exit();
        }
    }
}

new Main();