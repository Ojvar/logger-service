import { ActionHelper } from "@CORE/helpers/action-helper";
import { RouteItem } from "@CORE/helpers/route-helper";

export const routeBase: string = "/";
export const routes: RouteItem[] = [
    RouteItem.get("/", ActionHelper.action("monitor@index"), "monitor.index"),
];
