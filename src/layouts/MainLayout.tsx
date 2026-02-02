import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, Tooltip } from "antd";
import {
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Newspaper,
  TagIcon,
  User,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="flex items-center justify-center h-auto">
          <img
            src="/public/icons8-yelp.svg"
            className="w-20 h-20 my-2"
            alt="Logo"
          />
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
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
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="flex items-center justify-between"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Tooltip title="Đăng xuất">
            <LogOut className="cursor-pointer mr-6 w-4 h-4" />
          </Tooltip>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
