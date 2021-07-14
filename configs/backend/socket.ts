import { ServerOptions } from "socket.io";

/**
 * Config
 */
export const config = (): SocketServerConfig => {
    return {
        httpCompression: process.env.SOCKET_HTTP_COMPORESSION || true,
        port: process.env.SOCKET_HTTP_PORT
            ? +process.env.SOCKET_HTTP_PORT
            : null,
        useDefaultHttp: process.env.SOCKET_DEFAULT_HTTP || true,
    } as SocketServerConfig;
};

/**
 * Socket Helper config
 */
export type SocketServerConfig = ServerOptions & {
    port?: number;
    useDefaultHttp: boolean;
};
