"use client";
import { Button, Layout, Menu, Typography, theme } from 'antd';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import {
  CalendarOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BarChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { token } = theme.useToken();

  const menuItems = useMemo(
    () => [
      { key: '/overview', icon: <BarChartOutlined />, label: 'Overview' },
      { key: '/appointments', icon: <CalendarOutlined />, label: 'Appointments' },
      { key: '/reports', icon: <BarChartOutlined />, label: 'Reports (soon)' },
      { key: '/team', icon: <TeamOutlined />, label: 'Team (soon)' },
    ], []
  );

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  const onMenuClick = ({ key }: { key: string }) => {
    if (!key.includes('soon')) router.push(key);
    else return;
  };

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed} width={240}>
        <div className="flex h-16 items-center gap-2 px-4">
          <Image src="/file.svg" alt="logo" width={28} height={28} />
          {!collapsed && <span className="text-white/90">Appointment Manager</span>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[
            pathname?.startsWith('/overview')
              ? '/overview'
              : pathname?.startsWith('/appointments')
              ? '/appointments'
              : ''
          ]}
          items={menuItems}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: token.colorBgContainer }}>
          <div className="flex items-center justify-between pr-4">
            <div className="flex items-center">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{ fontSize: 16, width: 64, height: 64 }}
              />
              <Title level={4} className="!mb-0 hidden md:block">
                Dashboard
              </Title>
            </div>
            <Button icon={<LogoutOutlined />} type="primary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: token.colorBgContainer,
            borderRadius: 12,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
