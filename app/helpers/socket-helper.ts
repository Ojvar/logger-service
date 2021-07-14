import { SocketServerConfig } from "@CONFIGS/backend/socket";
import { GlobalData, LoggerType } from "@CORE/helpers/global-data-helper";
import { IncomingLogType } from "@TYPES/backend/socket-data-types";
import { Server, Socket } from "socket.io";

/**
 * Socket helper
 */
export class SocketHelper {
    private logger: LoggerType = GlobalData.logger;
    private io?: Server;

    /**
     * Start web-socket server
     * @param options {ServerOptionsType}
     */
    public async start(options: SocketServerConfig) {
        const server: Server = new Server(GlobalData.Express.app.Server);
        this.io = server;

        this.logger.info("Socket.IO server started successfully");

        server.on("connection", (socket: Socket) => {
            this.logger.info("New Connection ", socket.id);

            socket.on("connect", () => {
                this.logger.info(`New client[${socket.id}] connected`);
            });

            socket.on("disconnect", () => {
                this.logger.info(`Client[${socket.id}] disconnected`);
            });

            /* Setup events */
            socket.on("log", (data: IncomingLogType) => {
                /* Broadcast to all clients */
                socket.broadcast.emit("log", data);
            });
        });
    }
}
