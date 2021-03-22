import { ActionResultType } from "@Lib/types/global/action-result-type";
import ValidatorJs from "validatorjs";

/**
 * Base validator
 */
export class BaseValidator {
    /**
     * Generate error string
     * @param errors Errors lsit
     */
    public generateErrorString(errors: ValidatorJs.ValidationErrors): string {
        const errorValues: Array<any> = Object.values(errors);
        const result = errorValues.map((err) => err.join("\n")).join("\n");

        return result;
    }

    /**
     * Validate data
     */
    public validateData<T>(validator: IValidator, data: any): ActionResultType {
        const result: ActionResultType = {} as ActionResultType;

        /* Preparation */
        const validatorJS: ValidatorJs.Validator<T> = new ValidatorJs(
            data,
            validator.getRules(data),
            validator.getMessages(data)
        );
        validator.setup<T>(validatorJS);
        validatorJS.setAttributeNames(validator.getAttributes(data));

        /* Check */
        result.success = true == validatorJS.passes();
        if (!result.success) {
            result.data = {
                validator: validatorJS,
                errors: this.generateErrorString(validatorJS.errors.all()),
            } as ValidatorErrorType;
        }

        return result;
    }
}

/**
 * Validator interface
 */
export interface IValidator {
    /**
     * Post setup method
     * @param validator Validator<T>
     */
    setup<T>(validator: Validator.Validator<T>): void;

    /**
     * Get rules
     * @param data T data
     */
    getRules<T>(data?: T): ValidatorJs.Rules;

    /**
     * Get Attributes
     * @param data T data
     */
    getAttributes<T>(data?: T): ValidatorJs.AttributeNames;

    /**
     * Get Custom messages
     * @param data T data
     */
    getMessages<T>(data?: T): ValidatorJs.ErrorMessages;

    /**
     * Validate
     * @param data T data
     */
    validate(data: any): ActionResultType;
}

/**
 * ValidatorError type
 */
export type ValidatorErrorType = {
    validator: Validator.Validator<any>;
    errors: string;
};