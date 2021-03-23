import {
    ExpressHelper,
    MiddlewareInterface,
} from "core/helpers/express-helper";

import Express from "express";
import { GlobalMethods } from "@/core/helpers/global-methods-helper";
import { ServerConfigType } from "@CONFIGS/core/server";
import { Store } from "express-session";

/**
 * Default export
 */
export default class CookieSession implements MiddlewareInterface {
    private _expressHelper?: ExpressHelper;

    /**
     * Setup function
     * @param payload {any} Payload data
     */
    async setup(payload?: any): Promise<void> {
        this._expressHelper = payload as ExpressHelper;
    }

    /**
     * Check function
     * @param payload {any} Payload data
     */
    public async check(payload?: any): Promise<void> {
        const app: Express.Application = this._expressHelper
            ?.App as Express.Application;

        /*  Select proper store */
        const store: Store = await this.getUserSelectedStore();

        /* TODO: READ CONFIG FILE */
        const ExpressSession = (await import("express-session")).default;
        app.use(
            ExpressSession({
                secret: "MySecretCode_Comes_here",
                resave: false,
                saveUninitialized: false,
                cookie: {
                    secure: app.get("env") === "production",
                    maxAge: 1 * 60 * 60 * 1000 /* 1Hour */,
                },
                store,
            })
        );
    }

    /**
     * Get user selected store
     */
    private async getUserSelectedStore(): Promise<Store> {
        const config = (await GlobalMethods.importFile("./configs/core/server"))
            .config as ServerConfigType;

        let sessionDriver: any = (
            await GlobalMethods.importFile(
                `./core/session-drivers/${config.sessionStore?.toLowerCase()}-session-driver`
            )
        ).default;

        const SessionDriver: ISessionDriver = new sessionDriver() as ISessionDriver;
        const store: Store = await SessionDriver.setup();

        return store;
    }
}

/**
 * Session driver
 */
export interface ISessionDriver {
    setup(payload?: any): Promise<Store>;
}
