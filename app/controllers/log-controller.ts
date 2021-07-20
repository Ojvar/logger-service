import { GlobalHelper } from "@APP/helpers/GlobalHelper";
import { LogRequestType } from "@APP/validators/log/log-validator";
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
        const userData: LogRequestType = req.payload;
        const result: boolean = GlobalHelper.logHelper.log({
            ...userData,
            type: "info",
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
        const userData: LogRequestType = req.payload;
        const result: boolean = GlobalHelper.logHelper.log({
            ...userData,
            type: "debug",
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
        const userData: LogRequestType = req.payload;
        const result: boolean = GlobalHelper.logHelper.log({
            ...userData,
            type: "warning",
        });

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * Insert a error log
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public async error(req: Request, res: Response, next: NextFunction) {
        const userData: LogRequestType = req.payload;
        const result: boolean = GlobalHelper.logHelper.log({
            ...userData,
            type: "error",
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
        const userData: LogRequestType = req.payload;
        const result: boolean = GlobalHelper.logHelper.log({
            ...userData,
            type: "silly",
        });

        res.status(200)
            .send(result)
            .end();
    }
}
