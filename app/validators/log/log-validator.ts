import {
    BaseValidatorInterface,
    validate,
    ValidatorMiddlewareResultType
} from "@APP/validators/base-validator";
import {
    MaxRule,
    MinRule,
    RequiredRule,
    StringRule
} from "@APP/validators/validation-rules";
import { ActionResultType } from "@Lib/types/global/action-result-type";
import { Request } from "express";
import { Rules } from "validatorjs";

/**
 * Validator class
 */
export class LogValidator extends BaseValidatorInterface {
    /**
     * Get rules
     */
    public getRules<T>(data?: T): Rules {
        return {
            body: [RequiredRule, StringRule, MinRule(1), MaxRule(4000)],
            tag: [StringRule],
        } as Rules;
    }

    /**
     * Validate data
     * @param data Input data
     */
    public validate(
        data: LogRequestType,
        asyncCall: boolean = false
    ): ActionResultType | Promise<ActionResultType> {
        try {
            const userData: LogRequestType = JSON.parse(
                JSON.stringify(data)
            );

            return super.validateData<LogRequestType>(this, userData);
        } catch (err) {
            return {
                data: err,
                success: false,
            };
        }
    }

    /**
     * Validate middleware
     */
    public static validate(): ValidatorMiddlewareResultType {
        return validate<LogRequestType>(
            (req: Request): LogRequestType =>
                ({
                    body: req.body.body,
                    tag: req.body.tag,
                } as LogRequestType),
            new LogValidator()
        );
    }
}

/**
 * LogRequest Type
 */
export type LogRequestType = {
    body: string;
    tag: string;
    type?: string;
}
