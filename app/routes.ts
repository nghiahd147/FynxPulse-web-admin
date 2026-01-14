import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/login.tsx"),
  route("register", "./routes/register.tsx"),
  route("admin", "./routes/admin/layout.tsx", [index("routes/admin/dashboard.tsx")]),
] satisfies RouteConfig;
