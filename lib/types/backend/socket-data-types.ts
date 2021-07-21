export type LogType = "info" | "debug" | "error" | "warning" | "silly";

/**
 * Incoming log type
 */
export type IncomingLogType = {
    body: string;
    tag: string;
    type: LogType;
};
