import React from "react";
import { router, useForm } from "@inertiajs/react";
import { Col, Row, Form, Input, DatePicker, Select, Button } from "antd";
const { TextArea } = Input;

const CashForm = ({ data, setData, submitForm, saveButton, record }) => {
    const [form] = Form.useForm();

    const handelFormAfterSubmit = () => {
        form.submit();
        form.setFieldsValue({
            agent: "",
            branch: "",
            account: "",
            paymentmethod: "",
            amount: "",
            cheque: "",
            drawn: "",
            details: "",
        });
    };

    const onCancelData = () => {
        window.alert("Are You Sure Want to Cancel?");
        router.get(route("cashadvance.index"));
    };

    const handleAgent = (value) => {
        setData("agent", value);
    };

    const handleBranch = (value) => {
        setData("branch", value);
    };

    const handleAccount = (value) => {
        setData("account", value);
    };

    const handlePaymentMethod = (value) => {
        setData("paymentmethod", value);
    };
    const dateFormat = "YYYY-MM-DD";
    const handleDrawnDate = (value) => {
        setData("drawn", `${value.format(dateFormat)}`);
    };

    return (
        <div>
            <Form
                layout="vertical"
                form={form}
                onFinish={submitForm}
                initialValues={{
                    agent: data.agent,
                    branch: data.branch,
                    account: data.account,
                    paymentmethod: data.paymentmethod,
                    amount: data.amount,
                    cheque: data.cheque,
                    drawn: data.drawn,
                    details: data.details,
                }}
            >
                <Row gutter={[8, 4]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="Agent" name="agent">
                            <Select
                                name="agent"
                                onChange={handleAgent}
                                options={[
                                    {
                                        value: "Demo Developers",
                                        label: "Demo Developers",
                                    },
                                ]}
                                placeholder="--select agent--"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Branch" name="branch">
                            <Select
                                name="branch"
                                onChange={handleBranch}
                                options={[
                                    {
                                        value: "SLN Developers",
                                        label: "SLN Developers",
                                    },
                                    {
                                        value: "Demo Developers",
                                        label: "Demo Developers",
                                    },
                                ]}
                                placeholder="--select branch--"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Account" name="account">
                            <Select
                                name="account"
                                options={[
                                    {
                                        value: "Demo Developers",
                                        label: "Demo Developers",
                                    },
                                ]}
                                onChange={handleAccount}
                                placeholder="--select account--"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Payment Method" name="paymentmethod">
                            <Select
                                name="paymentmethod"
                                options={[
                                    {
                                        value: "Demo Developers",
                                        label: "Demo Developers",
                                    },
                                ]}
                                onChange={handlePaymentMethod}
                                placeholder="--select payment method--"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Amount" name="amount">
                            <Input
                                name="amount"
                                placeholder="Enter Paid Amount Here"
                                onChange={(e) =>
                                    setData("amount", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Cheque / DD NO" name="cheque">
                            <Input
                                name="cheque"
                                placeholder="Enter Cheque Number Here"
                                onChange={(e) =>
                                    setData("cheque", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Drawn On" name="drawn">
                            <DatePicker
                                style={{ width: "100%" }}
                                name="drawn"
                                placeholder="Cheque / DD drawn Date"
                                onChange={handleDrawnDate}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Details" name="details">
                            <TextArea
                                name="details"
                                placeholder="Enter Details Here"
                                onChange={(e) =>
                                    setData("details", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{ textAlign: "center" }}>
                    <p>
                        Note: Fields Marked with (
                        <span style={{ color: "red" }}>*</span>) Astrik is
                        Mandatory.
                    </p>
                </div>
                <div className="btns-container">
                    <Button
                        onClick={handelFormAfterSubmit}
                        htmlType="submit"
                        className="btn-item"
                        type="primary"
                    >
                        {saveButton}
                    </Button>
                    <Button
                        onClick={onCancelData}
                        className="btn-item"
                        type="primary"
                        danger
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default CashForm;
