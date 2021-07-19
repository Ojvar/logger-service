import { LogHelper } from "@APP/helpers/log-helper";
import { SocketHelper } from "@APP/helpers/socket-helper";
import { RedisClientHelper } from "@CORE/helpers/redis-client-helper";

/**
 * Globa helper class
 */
export class GlobalHelper {
    public static logHelper: LogHelper = new LogHelper();
    public static socketHelper: SocketHelper = new SocketHelper();
    public static redisClient?: RedisClientHelper;
}
