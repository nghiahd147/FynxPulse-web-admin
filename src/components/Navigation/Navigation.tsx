import {
  LayoutDashboard,
  MessageCircle,
  Newspaper,
  TagIcon,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export const sideBar = [
  {
    key: "dashboard",
    icon: <LayoutDashboard size={15} />,
    label: <Link to={"/"}>Thống kê</Link>,
  },
  {
    key: "users",
    icon: <User size={15} />,
    label: <Link to={"/users"}>Người dùng</Link>,
  },
  {
    key: "posts",
    icon: <Newspaper size={15} />,
    label: <Link to={"/posts"}>Bài viết</Link>,
  },
  {
    key: "comments",
    icon: <MessageCircle size={15} />,
    label: <Link to={"/comments"}>Bình luận</Link>,
  },
  {
    key: "hashtag",
    icon: <TagIcon size={15} />,
    label: <Link to={"/hashtags"}>Thẻ gắn nhãn</Link>,
  },
];
