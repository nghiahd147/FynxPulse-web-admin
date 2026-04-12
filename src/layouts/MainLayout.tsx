import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, notification, theme, Tooltip } from "antd";
import { LogOut } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import { sideBar } from "../components/Navigation/Navigation";
import useUsersStore from "../store/useUserStore";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const { logoutUser } = useUsersStore();

  useEffect(() => {
    if (!access_token) {
      navigate("/auth/login");
      notification.warning({
        title: "Thông báo",
        description: "Vui lòng đăng nhập hệ thống để tiếp tục sử dụng",
      });
    }
  }, []);

  const handleLogout = async () => {
    const refresh_token = localStorage.getItem("refresh_token");
    if (!refresh_token) {
      notification.error({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau",
      });
      return;
    }
    await logoutUser(refresh_token);
    notification.success({
      title: "Thành công",
      description: "Đăng xuất tài khoản thành công",
    });
    navigate("/auth/login");
  };

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
          items={sideBar}
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
            <LogOut
              className="cursor-pointer mr-6 w-4 h-4"
              onClick={handleLogout}
            />
          </Tooltip>
        </Header>
        <Content
          className="hidden-scroll"
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "100vh",
            overflowY: "auto",
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
