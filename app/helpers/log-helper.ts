import { GlobalHelper } from "./GlobalHelper";

/**
 * Log Helper class
 */
export class LogHelper {
    /**
     * Register and publish log data
     * @param data {LogItemType}
     * @param publish {boolean,default=true}
     * @returns {boolean}
     */
    public log(data: LogItemType, publish: boolean = true): boolean {
        return GlobalHelper.socketHelper.broadcast("log", data);
    }
}

/**
 * Log Item type
 */
export type LogItemType = {
    body: string;
    tag?: string;
    type: "info" | "error" | "warning" | "silly" | "debug";
};
