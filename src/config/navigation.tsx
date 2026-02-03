import {
  LayoutDashboard,
  MessageCircle,
  Newspaper,
  TagIcon,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export const navigate = [
  {
    key: "dashboard",
    icon: <LayoutDashboard size={15} />,
    label: <Link to={"/"}>Dashboard</Link>,
  },
  {
    key: "users",
    icon: <User size={15} />,
    label: <Link to={"/users"}>User</Link>,
  },
  {
    key: "posts",
    icon: <Newspaper size={15} />,
    label: <Link to={"/posts"}>Post</Link>,
  },
  {
    key: "comments",
    icon: <MessageCircle size={15} />,
    label: <Link to={"/comments"}>Comment</Link>,
  },
  {
    key: "hashtag",
    icon: <TagIcon size={15} />,
    label: <Link to={"/hashtags"}>Hashtag</Link>,
  },
];
