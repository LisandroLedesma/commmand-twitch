import { Schema } from "./middlewares/ValdiationSchema";
import { BaseController } from "./src/controllers/BaseController";

export const AppRoutes = [
    // ************************ TEMAS ******************************************
    {
        path: "/",
        method: "get",
        action: BaseController.baseAction,
        schema: Schema.schemaGenerico
    }
]