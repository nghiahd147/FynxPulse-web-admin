import {
  Calendar,
  User,
  Newspaper,
  MessageCircleMore,
  Hash,
  Home,
  Inbox,
  Search,
  UserCheck,
  Handshake,
  Settings,
  SmilePlus,
  Mailbox,
  Bell,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: User,
  },
  {
    title: "Posts",
    url: "/dashboard/posts",
    icon: Newspaper,
  },
  {
    title: "Comments",
    url: "/dashboard/comments",
    icon: MessageCircleMore,
  },
  {
    title: "Hashtag",
    url: "/dashboard/hashtag",
    icon: Hash,
  },
  {
    title: "Friendships",
    url: "/dashboard/friendships",
    icon: Handshake,
  },
  {
    title: "Followers",
    url: "/dashboard/followers",
    icon: UserCheck,
  },
  {
    title: "Reactions",
    url: "/dashboard/reactions",
    icon: SmilePlus,
  },
  {
    title: "Conversation Messages",
    url: "/dashboard/conversation-messages",
    icon: Mailbox,
  },
  {
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: Bell,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h2 className="text-black font-bold text-xl">
              <span className="text-orange-500">Fyn</span>x
            </h2>
          </SidebarGroupLabel>

          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
