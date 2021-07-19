import { SocketServerConfig } from "@CONFIGS/backend/socket";
import { GlobalData, LoggerType } from "@CORE/helpers/global-data-helper";
import { IncomingLogType } from "@TYPES/backend/socket-data-types";
import { Server, Socket } from "socket.io";

/**
 * Socket helper
 */
export class SocketHelper {
    /* Internal variables */
    private logger: LoggerType = GlobalData.logger;
    private _io?: Server;

    /* Constants */
    public readonly C_LOG_MESSAGE: string = "log";

    /**
     * Get server instance
     */
    public get io(): Server {
        return this._io as Server;
    }

    /**
     * Start web-socket server
     * @param options {ServerOptionsType}
     */
    public async start(options: SocketServerConfig) {
        const server: Server = new Server(GlobalData.Express.app.Server);
        this._io = server;

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
            socket.on(this.C_LOG_MESSAGE, (data: IncomingLogType) => {
                /* Broadcast to all clients */
                socket.broadcast.emit(this.C_LOG_MESSAGE, data);
            });
        });
    }

    /**
     * Broadcast a data (Emit a data)
     * @param emitType {string}
     * @param message {object | string}
     * @returns {boolean}
     */
    public broadcast(emitType: EmitType, message: object | string): boolean {
        return this.io.emit(emitType, message);
    }
}

/**
 * Emit types
 */
export type EmitType = "log";
