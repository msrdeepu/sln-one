import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LogoutOutlined,
    DownOutlined,
    AppstoreAddOutlined,
    BranchesOutlined,
    BoxPlotOutlined,
    BuildOutlined,
    SettingOutlined,
    GroupOutlined,
    BookOutlined,
    ClusterOutlined,
    DollarOutlined,
    MacCommandOutlined,
} from "@ant-design/icons";
import {
    Col,
    Layout,
    Menu,
    Row,
    theme,
    Typography,
    Space,
    Dropdown,
    Avatar,
} from "antd";

const { Header, Sider, Content } = Layout;

const items = [
    {
        key: "profile",
        label: <Link href={window.route("profile.edit")}>My profile</Link>,
        icon: <UserOutlined />,
    },
    {
        key: "logout",
        label: (
            <Link href={window.route("logout")} method="post" as="div">
                Logout
            </Link>
        ),
        icon: <LogoutOutlined />,
    },
];

export default function Authenticated({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const { auth } = usePage().props;

    const initial =
        JSON.parse(localStorage.getItem("sidebarCollapsed")) || false;
    const [collapsed, setCollapsed] = useState(initial);

    const toggleCollapse = () => {
        const updated = !collapsed;
        setCollapsed(updated);
        localStorage.setItem("sidebarCollapsed", JSON.stringify(updated));
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="app-layout">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <Typography.Title className="logo-text" level={3}>
                        {collapsed ? "SLN" : "SLN"}
                    </Typography.Title>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.route().current()]}
                    items={[
                        {
                            key: "dashboard",
                            icon: <MacCommandOutlined />,
                            label: (
                                <Link href={window.route("dashboard")}>
                                    Adminboard
                                </Link>
                            ),
                        },
                        {
                            key: "agents",
                            icon: <UserOutlined />,
                            label: (
                                <Link href={window.route("agents.index")}>
                                    Agents
                                </Link>
                            ),
                        },

                        {
                            key: "branches",
                            icon: <BranchesOutlined />,
                            label: (
                                <Link href={window.route("branches.index")}>
                                    Branches
                                </Link>
                            ),
                        },
                        {
                            key: "cashadvance",
                            icon: <DollarOutlined />,
                            label: (
                                <Link href={window.route("cashadvance.index")}>
                                    Cash Advance
                                </Link>
                            ),
                        },
                        {
                            key: "category",
                            icon: <GroupOutlined />,
                            label: (
                                <Link href={window.route("category.index")}>
                                    Categories
                                </Link>
                            ),
                        },
                        {
                            key: "companies",
                            icon: <AppstoreAddOutlined />,
                            label: (
                                <Link href={window.route("company.index")}>
                                    Companies
                                </Link>
                            ),
                        },
                        {
                            key: "page",
                            icon: <BookOutlined />,
                            label: (
                                <Link href={window.route("page.index")}>
                                    Content
                                </Link>
                            ),
                        },
                        {
                            key: "customers",
                            icon: <UserOutlined />,
                            label: (
                                <Link href={window.route("customer.index")}>
                                    Customers
                                </Link>
                            ),
                        },
                        {
                            key: "monthlyincentive",
                            icon: <DollarOutlined />,
                            label: (
                                <Link
                                    href={window.route(
                                        "monthlyincentive.index"
                                    )}
                                >
                                    Monthlyincentive
                                </Link>
                            ),
                        },
                        {
                            key: "paymentrecipts",
                            icon: <BookOutlined />,
                            label: (
                                <Link
                                    href={window.route("paymentrecipts.index")}
                                >
                                    Paymentrecipts
                                </Link>
                            ),
                        },
                        {
                            key: "properties",
                            icon: <BuildOutlined />,
                            label: (
                                <Link href={window.route("properties.index")}>
                                    Properties
                                </Link>
                            ),
                        },
                        {
                            key: "receipts",
                            icon: <GroupOutlined />,
                            label: (
                                <Link href={window.route("receipts.index")}>
                                    Receipts
                                </Link>
                            ),
                        },
                        {
                            key: "setting",
                            icon: <SettingOutlined />,
                            label: (
                                <Link href={window.route("setting.create")}>
                                    Settings
                                </Link>
                            ),
                        },
                        {
                            key: "ventures",
                            icon: <BoxPlotOutlined />,
                            label: (
                                <Link href={window.route("ventures.index")}>
                                    Ventures
                                </Link>
                            ),
                        },

                        {
                            key: "widget",
                            icon: <ClusterOutlined />,
                            label: (
                                <Link href={window.route("widget.index")}>
                                    Widgets
                                </Link>
                            ),
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        background: colorBgContainer,
                    }}
                >
                    <Row justify="space-between">
                        <Col>
                            {React.createElement(
                                collapsed
                                    ? MenuUnfoldOutlined
                                    : MenuFoldOutlined,
                                {
                                    className: "trigger",
                                    onClick: () => toggleCollapse(),
                                }
                            )}
                        </Col>
                        <Col>
                            <Dropdown menu={{ items }} trigger={["click"]}>
                                <div>
                                    <Typography.Text className="auth-dropdown">
                                        <Space size={12}>
                                            <Avatar
                                                size={36}
                                                icon={<UserOutlined />}
                                            />
                                            <div>
                                                <div>
                                                    <Typography.Text strong>
                                                        {auth.user.name}
                                                    </Typography.Text>
                                                </div>
                                                <div>{auth.user.email}</div>
                                            </div>
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Text>
                                </div>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
