import { NextFunction, Request, Response } from "express";

/**
 * Home controller
 */
export class HomeController {
    /**
     * Index function
     * @param req
     * @param res
     * @param next
     */
    public index(req: Request, res: Response, next: NextFunction) {
        res.render("pages/home.pug");
    }
}
