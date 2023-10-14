import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Typography, Button, Space } from "antd";

//icons
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

function CashAdvList({ props, cashadvanceList, record }) {
    //delete Action
    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("branches.destroy", e.currentTarget.id));
        }
    }

    //Loading Edit View
    function editRecord(e) {
        router.get(route("cashadvance.edit", e.currentTarget.id));
    }
    //table columns
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "key",
        },
        {
            title: "No.",
            dataIndex: "",
            key: "key",
        },
        {
            title: "Agent",
            dataIndex: "agent",
            key: "key",
        },
        {
            title: "Name",
            dataIndex: "",
            key: "key",
        },
        {
            title: "Location",
            dataIndex: "",
            key: "key",
        },

        {
            title: "Paid On",
            dataIndex: "",
            key: "key",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "key",
        },

        {
            title: "Details",
            dataIndex: "",
            key: "key",
        },

        {
            title: "Created On",
            dataIndex: "created_at",
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
                        //id={record.id}
                        //onClick={destroyRecord}
                        icon={<DeleteOutlined />}
                        danger
                    />
                </Space>
            ),
        },
    ];
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome to Cash Advance Page`}>
                <Typography.Text>
                    <div className="top-container">
                        <h3>Cash Advance List</h3>
                        <Link
                            href={window.route("cashadvance.create")}
                            type="button"
                        >
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                New Cash Advance
                            </Button>
                        </Link>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={cashadvanceList}
                        size="small"
                    />
                </Typography.Text>
            </Card>
        </>
    );
}

CashAdvList.layout = (page) => <AuthenticatedLayout children={page} />;

export default CashAdvList;
