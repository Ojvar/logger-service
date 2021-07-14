export type LogType =
    | "info"
    | "error"
    | "danger"
    | "silly"
    | "info"
    | "warning";

/**
 * Incoming log type
 */
export type IncomingLogType = {
    body: string;
    tag: string;
    type: LogType;
};
