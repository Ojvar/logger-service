import { RedisClientHelper } from "@CORE/helpers/redis-client-helper";
import { SocketHelper } from "./socket-helper";

/**
 * Globa helper class
 */
export class GlobalHelper {
    public static socketHelper: SocketHelper = new SocketHelper();
    public static redisClient?: RedisClientHelper;
}
