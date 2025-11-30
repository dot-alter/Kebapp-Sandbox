import { AlertStyle } from "./alert.css";

export const AlertHTML = () => {
    return `
    <div class="${AlertStyle}">
        <p>Alert</p>
        <button>Close</button>
    </div>
    `;
};
