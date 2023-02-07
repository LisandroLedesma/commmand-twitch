"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const ValdiationSchema_1 = require("./middlewares/ValdiationSchema");
const BaseController_1 = require("./src/controllers/BaseController");
exports.AppRoutes = [
    // ************************ TEMAS ******************************************
    {
        path: "/",
        method: "get",
        action: BaseController_1.BaseController.baseAction,
        schema: ValdiationSchema_1.Schema.schemaGenerico
    }
];
