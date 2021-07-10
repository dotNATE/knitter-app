import { getAllDogs } from "../Contollers/DogController";

export const routes = (app) => {

    app.get('/', getAllDogs);

}