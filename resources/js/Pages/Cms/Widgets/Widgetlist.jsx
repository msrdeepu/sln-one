import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Button, Space } from "antd";

//icons
import {
    EditOutlined,
    DeleteOutlined,
    FileAddOutlined,
} from "@ant-design/icons";

//delete Action
function destroyRecord(e) {
    if (confirm("Are you sure you want to delete this record ?")) {
        router.delete(route("widget.destroy", e.currentTarget.id));
    }
}

//Loading Edit View
function editRecord(e) {
    router.get(route("widget.edit", e.currentTarget.id));
}

//Table Columns
const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Title",
        dataIndex: "title",
        key: "key",
    },
    {
        title: "Type",
        dataIndex: "type",
        key: "key",
    },
    {
        title: "Location",
        dataIndex: "location",
        key: "key",
    },

    {
        title: "Published",
        dataIndex: "published",
        key: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "key",
    },
    {
        title: "Actions",
        dataIndex: "actions",
        render: (_, record) => (
            <Space size="small">
                {record.type == "COMPLEX" && (
                    <Button
                        shape="circle"
                        id={record.id}
                        // onClick={bulkRecord}
                        icon={<FileAddOutlined />}
                    />
                )}
                <Button
                    shape="circle"
                    id={record.id}
                    // onClick={editRecord}
                    icon={<EditOutlined />}
                />
                <Button
                    shape="circle"
                    id={record.id}
                    icon={<DeleteOutlined />}
                    // onClick={destroyRecord}
                    danger
                />
            </Space>
        ),
    },
];

const Widgetlist = ({ props, resource }) => {
    return (
        <div>
            <Head title={`Widgets List`} />

            <Card title={`Widgets List`}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link href={window.route("widget.create")} type="button">
                        <Button type="primary">Add Widget</Button>
                    </Link>
                </div>

                <Table columns={columns} size="small" dataSource={resource} />
            </Card>
        </div>
    );
};

Widgetlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Widgetlist;
