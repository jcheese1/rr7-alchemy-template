import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("playground", "routes/ui-playground.tsx")] satisfies RouteConfig;
