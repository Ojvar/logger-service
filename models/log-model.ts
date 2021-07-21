import { Document, Model, model, Schema } from "mongoose";

/**
 * Log type enum
 */
export enum LogTypeEnum {
    debug = "debug",
    error = "error",
    info = "info",
    silly = "silly",
    warning = "warning",
}

/**
 * LogDocument interface
 */
export interface ILogModelType {
    body: string;
    created_at: Date;
    tag?: string;
    type: LogTypeEnum;
    updated_at: Date;
}

/**
 * Log Schema
 */
export const LogSchema = new Schema<ILogDocument, ILogModel>(
    {
        type: {
            required: true,
            trim: true,
            type: String,
            enum: LogTypeEnum,
            default: "silly",
        },

        body: {
            required: true,
            trim: true,
            type: String,
        },

        tag: {
            required: false,
            trim: true,
            type: String,
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

/* Pre middleware */
LogSchema.pre("save", function(next: Function) {
    this.tag = this.tag ? this.tag.toLowerCase() : this.tag;
    next();
});

/**
 * LogModel interface
 */
export interface ILogModel extends Model<ILogDocument> {}

/**
 * LogBase document
 */
interface ILogBaseDocument extends ILogModelType, Document {}

/**
 * Log Document
 */
export interface ILogDocument extends ILogBaseDocument {}

/**
 * Export default
 */
export default model<ILogDocument, ILogModel>("Log", LogSchema, "logs");
