import { AlertHTML } from "../components/alerts/alerts";

export const Inicio = () => {
    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = AlertHTML();
    }
};