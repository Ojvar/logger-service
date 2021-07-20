import { LogValidator } from "@APP/validators/log/log-validator";
import { ActionHelper } from "@CORE/helpers/action-helper";
import { RouteItem } from "@CORE/helpers/route-helper";


export const routeBase: string = "/log";
export const routes: RouteItem[] = [
    RouteItem.post("/info", [ LogValidator.validate(), ActionHelper.action("log@info")], "log.info"),
    RouteItem.post("/debug", [LogValidator.validate(), ActionHelper.action("log@debug")], "log.debug"),
    RouteItem.post(
        "/warning",
        [LogValidator.validate(), ActionHelper.action("log@warning")],
        "log.warning"
    ),
    RouteItem.post("/error", [LogValidator.validate(), ActionHelper.action("log@error")], "log.error"),
    RouteItem.post("/silly", [LogValidator.validate(), ActionHelper.action("log@silly")], "log.silly"),
];
