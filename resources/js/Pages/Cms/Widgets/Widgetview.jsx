import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, router } from "@inertiajs/react";
import {
    Card,
    Space,
    Button,
    Form,
    Input,
    Select,
    Row,
    Col,
    Divider,
    Image,
} from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
const { TextArea } = Input;

const Widgetview = ({ record, swtype, spublish, slocation, surls, sltype }) => {
    const { data, setData, errors, post } = useForm();
    const [form] = Form.useForm();

    //delete Action
    //Loading Edit View
    const mainForm = () => {
        let imgtitle = "Upload Image";
        let bgimgtitle = "Upload Background Image";
        let bantitle = "Upload Banner";
        let mimgtitle = "Upload Mobile Image";
        let ftitle = "Upload File";
        let ytitle = "You Tube Video ID";

        let img = "";
        let link = "";

        let image = "";
        if (record.image != null) {
            imgtitle = "Replace Image";
            image = (
                <>
                    <Image width={200} src={record.imagePath} />{" "}
                    <Link href={`/widget/${record.id}/image`} method="post">
                        <Button shape="round" danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Link>
                </>
            );
        }

        let bgimage = "";
        if (record.bgimage != null) {
            bgimgtitle = "Replace Background Image";
            bgimage = (
                <>
                    <Image width={200} src={record.bgimagePath} />{" "}
                    <Link href={`/widget/${record.id}/bgimage`} method="post">
                        <Button shape="round" danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Link>
                </>
            );
        }

        let banner = "";
        if (record.banner != null) {
            bantitle = "Replace Banner";
            banner = (
                <>
                    <Image width={200} src={record.bannerPath} />{" "}
                    <Link href={`/widget/${record.id}/banner`} method="post">
                        <Button shape="round" danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Link>
                </>
            );
        }

        if (record.type != undefined) {
            ftitle = "Replace File";
            ytitle = "Replace YouTube Video";
        }

        switch (data.type || record.type) {
            case "BANNER":
                return (
                    <>
                        <Divider orientation="left"> Banner Item </Divider>
                        <Row gutter={[8, 8]}>
                            <Col xs={12} md={8}>
                                <Form.Item
                                    label="Select Link Type"
                                    name="linktype"
                                >
                                    <Select
                                        placeholder="Select Link Type"
                                        style={{ width: "100%" }}
                                        options={sltype}
                                        onChange={onLinkChange}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Item label="Link Url" name="linkurl">
                                    <Input
                                        onChange={(e) =>
                                            setData("linkurl", e.target.value)
                                        }
                                        defaultValue={record.linkurl}
                                    />{" "}
                                </Form.Item>
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Item
                                    label="Button Link Text"
                                    name="linktxt"
                                >
                                    <Input
                                        onChange={(e) =>
                                            setData("linktxt", e.target.value)
                                        }
                                        defaultValue={record.linktxt}
                                    />{" "}
                                </Form.Item>
                            </Col>

                            <Col xs={12} md={8}>
                                <Form.Item label={bantitle} name="banner">
                                    <Input
                                        type="file"
                                        onChange={(e) =>
                                            setData("banner", e.target.files[0])
                                        }
                                    />{" "}
                                </Form.Item>
                                {banner}
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Item label={imgtitle} name="image">
                                    <Input
                                        type="file"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />{" "}
                                </Form.Item>
                                {image}
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Item label={bgimgtitle} name="bgimage">
                                    <Input
                                        type="file"
                                        onChange={(e) =>
                                            setData(
                                                "bgimage",
                                                e.target.files[0]
                                            )
                                        }
                                    />{" "}
                                </Form.Item>
                                {bgimage}
                            </Col>

                            <Col xs={24} md={24}>
                                <Form.Item label="Optional Body" name="body">
                                    <TextArea
                                        style={{ width: "100%" }}
                                        placeholder="Body Content  Here..."
                                        onChange={(e) =>
                                            setData("body", e.target.value)
                                        }
                                        defaultValue={record.body}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </>
                );

            case "SLIDER":
                return (
                    <>
                        <Divider orientation="left"> Slide Item </Divider>
                        <Row gutter={[8, 8]}>
                            <Col xs={12} md={8}>
                                <Form.Item
                                    label="Select Link Type"
                                    name="linktype"
                                >
                                    <Select
                                        placeholder="Select Link Type"
                                        style={{ width: "100%" }}
                                        options={sltype}
                                        onChange={onLinkChange}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Item label="Link Url" name="linkurl">
                                    <Input
                                        onChange={(e) =>
                                            setData("linkurl", e.target.value)
                                        }
                                        defaultValue={record.linkurl}
                                    />{" "}
                                </Form.Item>
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Item
                                    label="Button Link Text"
                                    name="linktxt"
                                >
                                    <Input
                                        onChange={(e) =>
                                            setData("linktxt", e.target.value)
                                        }
                                        defaultValue={record.linktxt}
                                    />{" "}
                                </Form.Item>
                            </Col>

                            <Col xs={12} md={8}>
                                <Form.Item label={bantitle} name="banner">
                                    <Input
                                        type="file"
                                        onChange={(e) =>
                                            setData("banner", e.target.files[0])
                                        }
                                    />{" "}
                                </Form.Item>
                                {banner}
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Item label={imgtitle} name="image">
                                    <Input
                                        type="file"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />{" "}
                                </Form.Item>
                                {image}
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Item label={bgimgtitle} name="bgimage">
                                    <Input
                                        type="file"
                                        onChange={(e) =>
                                            setData(
                                                "bgimage",
                                                e.target.files[0]
                                            )
                                        }
                                    />{" "}
                                </Form.Item>
                                {bgimage}
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item
                                    label="Main Header"
                                    name="mainheader"
                                >
                                    <TextArea
                                        style={{ width: "100%" }}
                                        placeholder="Header Content  Here..."
                                        onChange={(e) =>
                                            setData(
                                                "mainheader",
                                                e.target.value
                                            )
                                        }
                                        defaultValue={record.mainheader}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label="Sub Header" name="subheader">
                                    <TextArea
                                        style={{ width: "100%" }}
                                        placeholder="Sub Header Content  Here..."
                                        onChange={(e) =>
                                            setData("subheader", e.target.value)
                                        }
                                        defaultValue={record.subheader}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={24}>
                                <Form.Item label="Main Body" name="body">
                                    <TextArea
                                        style={{ width: "100%" }}
                                        placeholder="Body Content  Here..."
                                        onChange={(e) =>
                                            setData("body", e.target.value)
                                        }
                                        defaultValue={record.body}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </>
                );

            case "CAROUSEL":
                return (
                    <>
                        <Divider orientation="left"> Carosel Item </Divider>
                        <Row gutter={[8, 8]}>
                            <Col xs={12} md={8}>
                                <Form.Item
                                    label="Select Link Type"
                                    name="linktype"
                                >
                                    <Select
                                        placeholder="Select Link Type"
                                        style={{ width: "100%" }}
                                        options={sltype}
                                        onChange={onLinkChange}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Item label="Link Url" name="linkurl">
                                    <Input
                                        onChange={(e) =>
                                            setData("linkurl", e.target.value)
                                        }
                                        defaultValue={record.linkurl}
                                    />{" "}
                                </Form.Item>
                            </Col>
                            <Col xs={12} md={8}>
                                <Form.Item
                                    label="Button Link Text"
                                    name="linktxt"
                                >
                                    <Input
                                        onChange={(e) =>
                                            setData("linktxt", e.target.value)
                                        }
                                        defaultValue={record.linktxt}
                                    />{" "}
                                </Form.Item>
                            </Col>

                            <Col xs={12} md={12}>
                                <Form.Item label={bantitle} name="banner">
                                    <Input
                                        type="file"
                                        onChange={(e) =>
                                            setData("banner", e.target.files[0])
                                        }
                                    />{" "}
                                </Form.Item>
                                {banner}
                            </Col>
                            <Col xs={12} md={12}>
                                <Form.Item label={imgtitle} name="image">
                                    <Input
                                        type="file"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />{" "}
                                </Form.Item>
                                {image}
                            </Col>
                            <Col xs={24} md={24}>
                                <Form.Item label="Main Body" name="body">
                                    <TextArea
                                        style={{ width: "100%" }}
                                        placeholder="Widget Content  Here..."
                                        onChange={(e) =>
                                            setData("body", e.target.value)
                                        }
                                        defaultValue={record.body}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </>
                );

            case "YOUTUBE":
                return (
                    <Row gutter={[8, 8]}>
                        <Col xs={24} md={12}>
                            <Form.Item label={ytitle} name="youtube">
                                <Input
                                    onChange={(e) =>
                                        setData("youtube", e.target.value)
                                    }
                                    defaultValue={record.youtube}
                                />{" "}
                            </Form.Item>
                        </Col>{" "}
                        <Col xs={24} md={12}>
                            <Form.Item label={imgtitle} name="image">
                                <Input
                                    type="file"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />{" "}
                            </Form.Item>
                            {image}
                        </Col>
                        <Col xs={24} md={24}>
                            <Form.Item label="Main Body" name="body">
                                <TextArea
                                    style={{ width: "100%" }}
                                    placeholder="Widget Content  Here..."
                                    onChange={(e) =>
                                        setData("body", e.target.value)
                                    }
                                    defaultValue={record.body}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                );

            case "RBANNERS":
                return (
                    <Row gutter={[8, 8]}>
                        <Col xs={12} md={6}>
                            <Form.Item label="Select Link Type" name="linktype">
                                <Select
                                    placeholder="Select Link Type"
                                    style={{ width: "100%" }}
                                    options={sltype}
                                    onChange={onLinkChange}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Item label="Link Url" name="linkurl">
                                <Input
                                    onChange={(e) =>
                                        setData("linkurl", e.target.value)
                                    }
                                    defaultValue={record.linkurl}
                                />{" "}
                            </Form.Item>
                        </Col>{" "}
                        <Col xs={12} md={6}>
                            <Form.Item label={bantitle} name="banner">
                                <Input
                                    type="file"
                                    onChange={(e) =>
                                        setData("banner", e.target.files[0])
                                    }
                                />{" "}
                            </Form.Item>
                            {banner}
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Item label={imgtitle} name="image">
                                <Input
                                    type="file"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />{" "}
                            </Form.Item>
                            {image}
                        </Col>
                    </Row>
                );

            case "LBANNER":
                return (
                    <Row gutter={[8, 8]}>
                        <Col xs={12} md={6}>
                            <Form.Item label="Select Link Type" name="linktype">
                                <Select
                                    placeholder="Select Link Type"
                                    style={{ width: "100%" }}
                                    options={sltype}
                                    onChange={onLinkChange}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Item label="Link Url" name="linkurl">
                                <Input
                                    onChange={(e) =>
                                        setData("linkurl", e.target.value)
                                    }
                                    defaultValue={record.linkurl}
                                />{" "}
                            </Form.Item>
                        </Col>{" "}
                        <Col xs={24} md={12}>
                            <Form.Item label={bantitle} name="banner">
                                <Input
                                    type="file"
                                    onChange={(e) =>
                                        setData("banner", e.target.files[0])
                                    }
                                />{" "}
                            </Form.Item>
                            {banner}
                        </Col>
                    </Row>
                );

            default:
                return (
                    <Row gutter={[8, 8]}>
                        <Col xs={24} md={24}>
                            <Form.Item label="Main Body" name="body">
                                <TextArea
                                    style={{ width: "100%" }}
                                    placeholder="Widget Content  Here..."
                                    onChange={(e) =>
                                        setData("body", e.target.value)
                                    }
                                    defaultValue={record.body}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                );
        }
    };

    function handleSubmit(values) {
        // e.preventDefault();

        form.resetFields();
        post(`/widget/store`, data, { forceFormData: true });
        //console.log(e);
    }

    function handleUpdate(values) {
        // e.preventDefault();
        form.resetFields();
        post(`/widget/${record.id}`, data, { forceFormData: true });
        //console.log(e);
    }

    let pageTitle = "";
    let action = handleSubmit;
    if (record.id == null) {
        pageTitle = `Add Widget`;
    } else {
        action = handleUpdate;
        pageTitle = `Update Widget`;
    }

    const onPubChange = (value) => {
        setData("published", value);
    };

    const onTypeChange = (value) => {
        setData("type", value);
    };

    const onLocChange = (value) => {
        setData("location", value);
    };

    const onLinkChange = (value) => {
        setData("linktype", value);
    };

    const onUrlChange = (value) => {
        setData("urls", value);
    };

    return (
        <div>
            <Head title={pageTitle} />

            <Card title={pageTitle}>
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={action}
                    initialValues={{
                        title: record.title || "",
                        body: record.body || "",
                        name: record.name || "",
                        groupname: record.groupname || "",
                        dorder: record.dorder || "",
                        type: record.type || "",
                        location: record.location || "",
                        urls: record.urls || "",
                        published: record.published || "",
                        linktype: record.linktype || "",
                        linktxt: record.linktxt || "",
                        linkurl: record.linkurl || "",
                    }}
                >
                    <Row gutter={[8, 8]}>
                        <Col xs={12} md={10}>
                            <Form.Item
                                label="Title"
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter Title",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Enter Title..."
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={12} md={5}>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter Unique Name",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Case Sensitive Must be Unique Code"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={12} md={5}>
                            <Form.Item label="Group Name" name="groupname">
                                <Input
                                    placeholder="Group Name To Filter"
                                    onChange={(e) =>
                                        setData("groupname", e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={12} md={4}>
                            <Form.Item label="Display Order" name="dorder">
                                <Input
                                    type="number"
                                    placeholder="Enter Order"
                                    onChange={(e) =>
                                        setData("dorder", e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[8, 8]}>
                        <Col xs={12} md={8}>
                            <Form.Item
                                label="Select Widget Type"
                                name="type"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Select Widget Type",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select Widget Type"
                                    style={{ width: "100%" }}
                                    options={swtype}
                                    onChange={onTypeChange}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={12} md={8}>
                            <Form.Item
                                label="Widget Location"
                                name="location"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please Select Widget Location",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select Widget Location"
                                    style={{ width: "100%" }}
                                    options={slocation}
                                    onChange={onLocChange}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={12} md={8}>
                            {" "}
                            <Form.Item
                                label="Published Status"
                                name="published"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please Select Published Status",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select Published Status"
                                    style={{ width: "100%" }}
                                    options={spublish}
                                    onChange={onPubChange}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col xs={24}>
                            <Form.Item
                                label="Display Only On Pages"
                                name="urls"
                            >
                                <Select
                                    mode="multiple"
                                    placeholder="Select Page Urls"
                                    style={{ width: "100%" }}
                                    options={surls}
                                    onChange={onUrlChange}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    {mainForm()}
                    <Row gutter={[8, 8]}>
                        <Col xs={24} md={2} offset={10}>
                            <Space style={{ marginTop: 30 }}>
                                {" "}
                                <Button htmlType="submit" type="primary">
                                    {" "}
                                    Save{" "}
                                </Button>
                                <Link href="/widget">
                                    {" "}
                                    <Button danger> Cancel </Button>
                                </Link>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    );
};

Widgetview.layout = (page) => <AuthenticatedLayout children={page} />;

export default Widgetview;
