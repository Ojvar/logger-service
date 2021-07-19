import { ActionHelper } from "@CORE/helpers/action-helper";
import { RouteItem } from "@CORE/helpers/route-helper";

export const routeBase: string = "/log";
export const routes: RouteItem[] = [
    RouteItem.post("/info", ActionHelper.action("log@info"), "log.info"),
    RouteItem.post("/debug", ActionHelper.action("log@debug"), "log.debug"),
    RouteItem.post(
        "/warning",
        ActionHelper.action("log@warning"),
        "log.warning"
    ),
    RouteItem.post("/error", ActionHelper.action("log@error"), "log.error"),
    RouteItem.post("/silly", ActionHelper.action("log@silly"), "log.silly"),
];
