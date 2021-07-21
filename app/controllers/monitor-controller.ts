import { config as ServerConfig, ServerConfigType } from "@CONFIGS/core/server";
import { NextFunction, Request, Response } from "express";

/**
 * Monitor controller
 */
export class MonitorController {
    private serverConfig: ServerConfigType = ServerConfig();

    /**
     * Index function
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public index(req: Request, res: Response, next: NextFunction) {
        res.render("pages/monitor/index.pug", {
            url: this.serverConfig.serverUrl,
        });
    }
}
