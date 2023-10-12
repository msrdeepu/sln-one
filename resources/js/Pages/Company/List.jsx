import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Typography, Button, Col, Row, Space, Image } from "antd";
//icons
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

import "./list.css";

import "../../../css/app.css";

//delete Action
function destroyRecord(e) {
    if (confirm("Are you sure you want to delete this record ?")) {
        router.delete(route("company.destroy", e.currentTarget.id));
    }
}

//Loading Edit View
function editRecord(e) {
    router.get(route("company.edit", e.currentTarget.id));
}

function Companylist({ props, companyList, record }) {
    //table columns
    const columns = [
        {
            title: "Logo",
            dataIndex: "logo",
            key: "id",
            render: (_, record) => (
                <Space size="small">
                    <Image width={100} src={record.logo} />
                </Space>
            ),
        },
        {
            title: "Domain",
            dataIndex: "domain",
            key: "key",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "key",
        },
        {
            title: "Phone",
            dataIndex: "phonenum",
            key: "key",
        },

        {
            title: "Mobile",
            dataIndex: "mobilenum",
            key: "key",
        },
        {
            title: "GST",
            dataIndex: "gstax",
            key: "key",
        },
        {
            title: "PAN",
            dataIndex: "pan",
            key: "key",
        },
        {
            title: "Active",
            dataIndex: "astatus",
            key: "key",
        },
        {
            title: "Created On",
            dataIndex: "created_at",
            // render: (_, record) => (
            //     <>
            //         <p>{record.created_at}</p>
            //     </>
            // ),
            key: "key",
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => (
                <Space size="small">
                    <Button
                        style={{ margin: "5px" }}
                        shape="circle"
                        id={record.id}
                        onClick={editRecord}
                        icon={<EditOutlined />}
                    />
                    <Button
                        style={{ margin: "5px" }}
                        shape="circle"
                        id={record.id}
                        icon={<DeleteOutlined />}
                        onClick={destroyRecord}
                        danger
                    />
                </Space>
            ),
        },
    ];

    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome to Companies Page`}>
                <Typography.Text>
                    <div className="top-container">
                        <h3>Companies List</h3>
                        <Link
                            href={window.route("company.create")}
                            type="button"
                        >
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                New Company
                            </Button>
                        </Link>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={companyList}
                        size="small"
                    />
                </Typography.Text>
            </Card>
        </>
    );
}

Companylist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Companylist;
