import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/login.tsx"),
  route("register", "./routes/register.tsx"),
  route("dashboard", "./routes/dashboard/layout.tsx", [
    index("routes/dashboard/dashboard.tsx"),
    route("/dashboard/users", "./routes/dashboard/users.tsx"),
    route("/dashboard/posts", "./routes/dashboard/posts.tsx"),
    route("/dashboard/comments", "./routes/dashboard/comments.tsx"),
    route("/dashboard/hashtag", "./routes/dashboard/hashtags.tsx"),
    route("/dashboard/friendships", "./routes/dashboard/friendships.tsx"),
    route("/dashboard/followers", "./routes/dashboard/followers.tsx"),
    route("/dashboard/reactions", "./routes/dashboard/reactions.tsx"),
    route("/dashboard/conversation-messages", "./routes/dashboard/conversations_messages.tsx"),
    route("/dashboard/notifications", "./routes/dashboard/notifications.tsx"),
  ]),
] satisfies RouteConfig;
