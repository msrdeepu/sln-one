import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Typography, Button, Space } from "antd";

//delete Action
// function destroyRecord(e) {
//     if (confirm("Are you sure you want to delete this record ?")) {
//         router.delete(route("branches.destroy", e.currentTarget.id));
//     }
// }

//Loading Edit View
// function editRecord(e) {
//     router.get(route("branches.edit", e.currentTarget.id));
// }

//icons
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

function Customerlist({ props, customerList }) {
    //table columns
    const columns = [
        {
            title: "CODE",
            dataIndex: "code",
            key: "key",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "key",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "key",
        },
        {
            title: "Phone",
            dataIndex: "phonenumber",
            key: "key",
        },

        {
            title: "Mobile",
            dataIndex: "mobilenumber",
            key: "key",
        },
        {
            title: "Active",
            dataIndex: "status",
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
                        //id={record.id}
                        //onClick={editRecord}
                        icon={<EditOutlined />}
                    />
                    <Button
                        style={{ margin: "5px" }}
                        shape="circle"
                        //id={record.id}
                        icon={<DeleteOutlined />}
                        //onClick={destroyRecord}
                        danger
                    />
                </Space>
            ),
        },
    ];
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Customer Full Details`}>
                <Typography.Text>
                    <div className="top-container">
                        <h3>Customer List</h3>
                        <Link
                            href={window.route("customer.create")}
                            type="button"
                        >
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                New Customer
                            </Button>
                        </Link>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={customerList}
                        size="small"
                    />
                </Typography.Text>
            </Card>
        </>
    );
}

Customerlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Customerlist;
