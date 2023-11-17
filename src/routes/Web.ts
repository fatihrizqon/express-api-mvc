import { Router } from "express";
import { UserController } from "../controllers/UserController";

export default class Web {
    router: Router;

    constructor() {this.router = Router();}

    routes() {
        this.router.get('/', (req, res) => {
            res.send({
                message: "Index of Express MVC REST API"
            });
        });

        this.router.get("/users", UserController.getUsers);
        this.router.get("/users/:id", UserController.getUserById);

        return this.router;
    }
}

