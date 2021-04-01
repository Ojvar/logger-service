import { RequestHandler } from "express";

/**
 * Router-Itme class
 */
export class RouteItem {
    public routeType: string = "";
    public path: string = "";
    public alias?: string;
    public handler: RequestHandler | RequestHandler[];

    /**
     * Ctr
     * @param rType {RequestType}
     * @param path {string}
     * @param handler {RequestHandler | RequestHandler[]}
     * @param alias {string?}
     */
    constructor(
        rType: RequestType,
        path: string,
        handler: RequestHandler | RequestHandler[],
        alias?: string
    ) {
        this.routeType = rType;
        this.path = path;
        this.handler = handler;
        this.alias = alias;
    }

    /**
     * Generate a routeItem
     * @param rType {RequestType}
     * @param path {string}
     * @param handler {RequestHandler | RequestHandler[]}
     * @param alias {string?}
     */
    public static route(
        rType: RequestType,
        path: string,
        handler: RequestHandler | RequestHandler[],
        alias?: string
    ) {
        return new RouteItem(rType, path, handler, alias);
    }

    /**
     * Generate a routeItem
     * @param path {string}
     * @param handler {RequestHandler | RequestHandler[]}
     * @param alias {string?}
     */
    public static get(
        path: string,
        handler: RequestHandler | RequestHandler[],
        alias?: string
    ) {
        return this.route("get", path, handler, alias);
    }

    /**
     * Generate a routeItem
     * @param path {string}
     * @param handler {RequestHandler | RequestHandler[]}
     * @param alias {string?}
     */
    public static head(
        path: string,
        handler: RequestHandler | RequestHandler[],
        alias?: string
    ) {
        return this.route("head", path, handler, alias);
    }

    /**
     * Generate a routeItem
     * @param path {string}
     * @param handler {RequestHandler | RequestHandler[]}
     * @param alias {string?}
     */
    public static post(
        path: string,
        handler: RequestHandler | RequestHandler[],
        alias?: string
    ) {
        return this.route("post", path, handler, alias);
    }

    /**
     * Generate a routeItem
     * @param path {string}
     * @param handler {RequestHandler | RequestHandler[]}
     * @param alias {string?}
     */
    public static patch(
        path: string,
        handler: RequestHandler | RequestHandler[],
        alias?: string
    ) {
        return this.route("patch", path, handler, alias);
    }

    /**
     * Generate a routeItem
     * @param path {string}
     * @param handler {RequestHandler | RequestHandler[]}
     * @param alias {string?}
     */
    public static put(
        path: string,
        handler: RequestHandler | RequestHandler[],
        alias?: string
    ) {
        return this.route("put", path, handler, alias);
    }

    /**
     * Generate a routeItem
     * @param path {string}
     * @param handler {RequestHandler | RequestHandler[]}
     * @param alias {string?}
     */
    public static delete(
        path: string,
        handler: RequestHandler | RequestHandler[],
        alias?: string
    ) {
        return this.route("delete", path, handler, alias);
    }

    /**
     * Generate a routeItem
     * @param path {string}
     * @param handler {RequestHandler | RequestHandler[]}
     * @param alias {string?}
     */
    public static option(
        path: string,
        handler: RequestHandler | RequestHandler[],
        alias?: string
    ) {
        return this.route("option", path, handler, alias);
    }
}

export type RequestType =
    | "head"
    | "get"
    | "post"
    | "put"
    | "patch"
    | "delete"
    | "option";
