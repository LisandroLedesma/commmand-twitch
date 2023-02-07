import { Request, Response } from "express";

const baseAction = async(request: Request, response: Response) => {
    console.log("entro al action")
    return response.json("Esto es un ejemplo");
}

export const BaseController = {
    baseAction
}