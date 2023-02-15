"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function App(props) {
    const data = props.props.data;
    const handleOnClick = () => {
        window.FileMaker.PerformScriptWithOption("Show Result", "You click a button", 5);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null, data),
        react_1.default.createElement("button", { onClick: handleOnClick }, "Click")));
}
;
exports.default = App;
