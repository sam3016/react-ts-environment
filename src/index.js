"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("react-dom/client");
const react_1 = __importDefault(require("react"));
const app_1 = __importDefault(require("../components/app"));
window.loadApp = (json) => {
    const data = JSON.parse(json);
    if (data) {
        const container = document.getElementById('root');
        const root = (0, client_1.createRoot)(container); // createRoot(container!) if you use TypeScript
        root.render(react_1.default.createElement(app_1.default, { props: data }));
    }
};
