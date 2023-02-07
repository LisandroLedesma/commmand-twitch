"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
const routes_1 = require("./routes");
require("reflect-metadata");
const cors = require("cors");
const { checkSchema, validationResult } = require("express-validator");
const app = (0, express_1.default)();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
}));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
routes_1.AppRoutes.forEach((route) => {
    app.use(route.path, checkSchema(route.schema), (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.json(validationResult(request).array());
        }
        route
            .action(request, response)
            .then(() => next)
            .catch((err) => next(err));
    });
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield app.listen(process.env.PORT || 8080, () => {
        console.log(`Server running on http://127.0.0.1:${process.env.PORT}`);
    });
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    //await  connectDB();
    yield startServer();
}))();
