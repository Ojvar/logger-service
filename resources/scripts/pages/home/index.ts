import { Vue } from "@Scripts/vendors/vue";
import { LoadingMixin } from "@Scripts/vue-mixins/loading-mixin";
import { IncomingLogType } from "@TYPES/backend/socket-data-types";
import { io, Socket } from "socket.io-client";

/**
 * HomePage class
 */
export class HomePage {
    /**
     * Ctr
     */
    constructor() {
        this.initVue();
    }

    /**
     * Init Vue
     */
    private initVue() {
        new Vue({
            el: "#app",

            mixins: [LoadingMixin()],

            data: () =>
                ({
                    filter: "",
                    logs: [],
                    socket: null,
                } as {
                    filter: string;
                    logs: IncomingLogType[];
                    socket: Socket | null;
                }),

            /**
             * Initialization
             */
            created() {
                this.connectToServer();
            },

            methods: {
                /**
                 * Send message
                 */
                sendMessage() {
                    const logData: IncomingLogType = {
                        body: "lorem ipsume " + new Date(),
                        tag: "Viewer-Client",
                        type: "info",
                    } as IncomingLogType;

                    Vue.set(this.logs, this.logs.length, logData);
                    this.socket?.emit("log", logData);
                },

                /**
                 * New incoming log
                 * @param data {IncomfingLogType}
                 */
                newIncomingLog(data: IncomingLogType) {
                    Vue.set(this.logs, this.logs.length, data);
                },

                /**
                 * Connect to socket-server
                 */
                connectToServer() {
                    const socket: Socket = io();
                    Vue.set(this, "socket", socket);

                    socket.on("log", (data: IncomingLogType) => {
                        this.newIncomingLog(data);
                    });

                    socket.on("connect", () => {
                        console.log("Connected");
                    });

                    socket.on("disconnect", () => {
                        console.log("Disconnected");
                    });

                    socket.on("connect_error", () => {
                        console.log("Connect error");
                    });
                },
            },
        });
    }
}

new HomePage();
