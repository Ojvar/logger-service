import { Request, Response, NextFunction } from "express";

export class HomeController {
    /**
     * Index function
     * @param req
     * @param res
     * @param next
     */
    public index(req: Request, res: Response, next: NextFunction) {
        console.log(req.params)
        res.render("home.pug", { ...req.params });
    }
}
