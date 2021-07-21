import { GlobalHelper } from "@APP/helpers/GlobalHelper";
import LogModel from "@MODELS/log-model";
import { IncomingLogType } from "@TYPES/backend/socket-data-types";

/**
 * Log Helper class
 */
export class LogHelper {
    /**
     * Register and publish log data
     * @param data {IncomingLogType}
     * @param publish {boolean,default=true}
     * @returns {boolean}
     */
    public log(data: IncomingLogType, publish: boolean = true): boolean {
        /* Store log */
        LogModel.create(data);

        /* Publish log */
        return GlobalHelper.socketHelper.broadcast("log", data);
    }
}
