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

                computed: {
                    /**
                     * Returns filtered logs
                     * @returns {IncomingLogType[]}
                     */
                    filteredLogs(): IncomingLogType[] {
                        const filter:string = this.filter.toLowerCase();

                        return this.logs.filter((item:IncomingLogType ) => 
                                            -1 < item.tag.toLowerCase().indexOf(filter) || 
                                            -1 < item.type.toLowerCase().indexOf(filter))
                    }
                },

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

                    this.logs.unshift(logData);
                    this.socket?.emit("log", logData);
                },

                /**
                 * New incoming log
                 * @param logData {IncomfingLogType}
                 */
                newIncomingLog(logData: IncomingLogType) {
                    this.logs.unshift(logData);
                    // Vue.set(this.logs, this.logs.length, data);
                },

                /**
                 * Clear logs
                 */
                clearLogs() {
                    Vue.set(this, "logs", []);
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
