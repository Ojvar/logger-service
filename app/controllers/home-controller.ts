import { NextFunction, Request, Response } from "express";

/**
 * Home controller
 */
export class HomeController {
    /**
     * Index function
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public index(req: Request, res: Response, next: NextFunction) {
        res.render("pages/home/index.pug");
    }

    /**
     * About function
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public about(req: Request, res: Response, next: NextFunction) {
        res.render("pages/home/about.pug", { user: req.user });
    }

    /**
     * ReportIssue function
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public reportIssue(req: Request, res: Response, next: NextFunction) {
        res.render("pages/home/report-issue.pug", { user: req.user });
    }

    /**
     * PrivatePage function
     * @param req {Request}
     * @param res {Response}
     * @param next {NextFunction}
     */
    public privatePage(req: Request, res: Response, next: NextFunction) {
        res.render("pages/home/private-page.pug", { user: req.user });
    }
}
