import { GlobalHelper } from "@APP/helpers/GlobalHelper";
import { NextFunction, Request, Response } from "express";

/**
 * Log controller
 */
export class LogController {
    /**
     * Insert an info log
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public async info(req: Request, res: Response, next: NextFunction) {
        const result: boolean = GlobalHelper.logHelper.log({
            ...req.body,
            type: "info",
        });

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * Insert a warning log
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public async warning(req: Request, res: Response, next: NextFunction) {
        const result: boolean = GlobalHelper.logHelper.log({
            ...req.body,
            type: "warning",
        });

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * Insert a danger log
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public async danger(req: Request, res: Response, next: NextFunction) {
        const result: boolean = GlobalHelper.logHelper.log({
            ...req.body,
            type: "danger",
        });

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * Insert a silly log
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public async silly(req: Request, res: Response, next: NextFunction) {
        const result: boolean = GlobalHelper.logHelper.log({
            ...req.body,
            type: "silly",
        });

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * Insert a debug log
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public async debug(req: Request, res: Response, next: NextFunction) {
        const result: boolean = GlobalHelper.logHelper.log({
            ...req.body,
            type: "debug",
        });

        res.status(200)
            .send(result)
            .end();
    }
}
