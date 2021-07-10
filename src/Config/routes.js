import { getAllUsers } from "../Contollers/UserController";

export const routes = (app) => {

    app.get('/', getAllUsers);
    
}