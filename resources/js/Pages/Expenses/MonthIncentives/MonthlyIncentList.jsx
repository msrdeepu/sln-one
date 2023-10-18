import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Typography, Button, Space } from "antd";

//icons
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

//table columns
const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "key",
    },
    {
        title: "Agent",
        dataIndex: "agent",
        key: "key",
    },
    {
        title: "Paid On",
        dataIndex: "paidon",
        key: "key",
    },
    {
        title: "TDS",
        dataIndex: "tds",
        key: "key",
    },

    {
        title: "Payment Method",
        dataIndex: "paymentmethod",
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
                    // onClick={destroyRecord}
                    danger
                />
            </Space>
        ),
    },
];

function MonthlyIncentList(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome to Monthly Incentives Page`}>
                <Typography.Text>
                    <div className="top-container">
                        <h3>Monthly Incentives List</h3>
                        <Link
                            href={window.route("monthlyincentive.create")}
                            type="button"
                        >
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                New Incentive
                            </Button>
                        </Link>
                    </div>
                    <Table columns={columns} dataSource={""} size="small" />
                </Typography.Text>
            </Card>
        </>
    );
}

MonthlyIncentList.layout = (page) => <AuthenticatedLayout children={page} />;

export default MonthlyIncentList;
