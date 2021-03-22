import { Application, NextFunction, Request, Response } from "express";

import Helmet from "helmet";
import { config } from "@CONFIGS/core/helmet";
import { isNamedExportBindings } from "typescript";
import { randomBytes } from "crypto";

/**
 * HelmetHelper class
 */
export class HelmetHelper {
    /**
     * Initialize
     */
    public async init(app: Application) {
        app.use((req: Request, res: Response, next: NextFunction) => {
            res.locals.nonce = randomBytes(32).toString("hex");

            if (config.contentSecurityPolicy) {
                const cspConfig = config.contentSecurityPolicy(
                    res.locals.nonce
                );

                return Helmet.contentSecurityPolicy(cspConfig)(req, res, next);
            }
        });

        app.use(Helmet.dnsPrefetchControl(config.dnsPrefetchControl));

        app.use(Helmet.expectCt(config.expectCt));

        app.use(Helmet.frameguard(config.frameguard));

        app.use(Helmet.hsts(config.hsts));

        app.use(
            Helmet.permittedCrossDomainPolicies(
                config.permittedCrossDomainPolicies
            )
        );

        app.use(Helmet.hidePoweredBy());

        app.use(Helmet.ieNoOpen());

        app.use(Helmet.noSniff());

        app.use(Helmet.referrerPolicy(config.referrerPolicy));

        app.use(Helmet.xssFilter());
    }
}
