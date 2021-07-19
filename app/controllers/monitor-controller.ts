import { NextFunction, Request, Response } from "express";

/**
 * Monitor controller
 */
export class MonitorController {
    /**
     * Index function
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public index(req: Request, res: Response, next: NextFunction) {
        res.render("pages/monitor/index.pug");
    }
}
