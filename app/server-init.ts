import { config as SocketConfig } from "@CONFIGS/backend/socket";
import { GlobalData } from "@CORE/helpers/global-data-helper";
import { GlobalHelper } from "./helpers/GlobalHelper";

/**
 * Server init class
 */
export class ServerInitClass {
    /**
     * On server initialized method
     * @param payload {any} Payload data
     */
    public async onServerInitialized(payload?: any) {
        /* Write whatever you want to do immediatly after server initilized successfully */
        GlobalData.logger.info("Server initalized successfully");

        /* Start Socket.IO Server */
        GlobalHelper.socketHelper.start(SocketConfig());
    }
}
