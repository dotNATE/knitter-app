import { getAllUsers } from "../Contollers/UserController";
import { getAllStitches } from "../Contollers/StitchController";

export const routes = (app) => {

    app.get('/users', getAllUsers);
    app.get('/stitches', getAllStitches);

}