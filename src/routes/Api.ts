import { Router } from "express";

export default class Api {
    router: Router;

    constructor() {
        this.router = Router();
    }

    routes() {
        this.router.get('/', (req, res) => {
            res.send(200);
        });

        this.router.get('/users', (req, res) => {
            res.send("load users");
        });

        return this.router;
    }
}

