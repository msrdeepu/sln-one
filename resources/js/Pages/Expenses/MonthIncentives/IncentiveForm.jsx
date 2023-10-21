import React from "react";
import { router } from "@inertiajs/react";
import { Col, Row, Form, Input, DatePicker, Select, Button } from "antd";
const { TextArea } = Input;
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

const IncentiveForm = ({ data, setData, submitForm, saveButton, record }) => {
    const [form] = Form.useForm();

    const handleIncentiveType = (value) => {
        setData("incentivetype", value);
        console.log(value);
    };

    const handleAgent = (value) => {
        setData("agent", value);
        console.log(value);
    };

    const handleAccount = (value) => {
        setData("account", value);
        console.log(value);
    };

    const handlePaymentmethod = (value) => {
        setData("paymentmethod", value);
        console.log(value);
    };

    const dateFormat = "YYYY-MM-DD";
    const handleDurationFrom = (value) => {
        setData("durationfrom", `${value.format(dateFormat)}`);
        console.log(value);
    };
    const handleDurationTo = (value) => {
        setData("durationto", `${value.format(dateFormat)}`);
        console.log(value);
    };

    const handleDate = (value) => {
        setData("paidon", `${value.format(dateFormat)}`);
    };

    const onCancelData = () => {
        window.alert("Are You Sure Want to Cancel?");
        router.get(route("monthlyincentive.index"));
    };

    const handelForm = () => {
        form.submit();
    };

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={submitForm}
            autoComplete="on"
            initialValues={{
                incentivetype: data.incentivetype,
                durationfrom: data.durationfrom,
                durationto: data.durationto,
                agent: data.agent,
                account: data.account,
                business: data.business,
                paidon: data.paidon,
                amount: data.amount,
                tds: data.tds,
                gst: data.gst,
                chequeno: data.chequeno,
                ddnum: data.ddnum,
                drawnon: data.drawnon,
                transactionid: data.transactionid,
                description: data.description,
            }}
        >
            <Row gutter={[8, 4]}>
                <Col xs={24} md={8}>
                    <Form.Item label="Incentive Type" name="incentivetype">
                        {" "}
                        <Select
                            name="incentivetype"
                            options={[
                                {
                                    value: "Demo Developers",
                                    label: "Demo Developers",
                                },
                            ]}
                            onChange={handleIncentiveType}
                            placeholder="--select Incentive Type--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Duration From" name="durationfrom">
                        {record.durationfrom != null ? (
                            <DatePicker
                                defaultValue={dayjs(
                                    record.durationfrom,
                                    dateFormat
                                )}
                                style={{ width: "100%" }}
                                onChange={handleDurationFrom}
                                format={dateFormat}
                            />
                        ) : (
                            <DatePicker
                                style={{ width: "100%" }}
                                onChange={handleDurationFrom}
                                format={dateFormat}
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Duration To" name="durationto">
                        {record.durationto != null ? (
                            <DatePicker
                                defaultValue={dayjs(
                                    record.durationto,
                                    dateFormat
                                )}
                                style={{ width: "100%" }}
                                onChange={handleDurationTo}
                                format={dateFormat}
                            />
                        ) : (
                            <DatePicker
                                style={{ width: "100%" }}
                                onChange={handleDurationTo}
                                format={dateFormat}
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Agent" name="agent">
                        {" "}
                        <Select
                            name="agent"
                            options={[
                                {
                                    value: "Demo Agent",
                                    label: "Demo Agent",
                                },
                            ]}
                            onChange={handleAgent}
                            placeholder="--select agent--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Account" name="account">
                        {" "}
                        <Select
                            name="account"
                            options={[
                                {
                                    value: "Cash @ TPT",
                                    label: "Cash @ TPT",
                                },
                            ]}
                            onChange={handleAccount}
                            placeholder="--select Account--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Business" name="business">
                        <Input
                            name="business"
                            placeholder="Business"
                            onChange={(e) =>
                                setData("business", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Payment Method" name="paymentmethod">
                        {" "}
                        <Select
                            name="paymentmethod"
                            options={[
                                {
                                    value: "Method",
                                    label: "Method",
                                },
                            ]}
                            onChange={handlePaymentmethod}
                            placeholder="--Select Payment Method--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item label="Paid On" name="paidon">
                        {record.paidon != null ? (
                            <DatePicker
                                defaultValue={dayjs(record.paidon, dateFormat)}
                                style={{ width: "100%" }}
                                onChange={handleDate}
                                format={dateFormat}
                            />
                        ) : (
                            <DatePicker
                                style={{ width: "100%" }}
                                onChange={handleDate}
                                format={dateFormat}
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Amount" name="amount">
                        <Input
                            name="amount"
                            onChange={(e) => setData("amount", e.target.value)}
                            placeholder="Enter Amount"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="TDS" name="tds">
                        <Input
                            name="tds"
                            placeholder="Enter TDS"
                            onChange={(e) => setData("tds", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="GST" name="gst">
                        <Input
                            name="gst"
                            placeholder="Enter GST"
                            onChange={(e) => setData("gst", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Cheque NO" name="chequeno">
                        <Input
                            name="chequeno"
                            placeholder="chequeno"
                            onChange={(e) =>
                                setData("chequeno", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="D.D. NO" name="ddnum">
                        <Input
                            name="ddnum"
                            placeholder="Enter DD Number here"
                            onChange={(e) => setData("ddnum", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Drawn On" name="drawnon">
                        <Input
                            name="drawnon"
                            placeholder="Drawn On"
                            onChange={(e) => setData("drawnon", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Transaction ID" name="transactionid">
                        <Input
                            name="transactionid"
                            placeholder="Enter Transaction ID"
                            onChange={(e) =>
                                setData("transactionid", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Description" name="description">
                        <TextArea
                            rows={3}
                            name="description"
                            placeholder="Enter Descriptin Here"
                            onChange={(e) =>
                                setData("description", e.target.value)
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
                    htmlType="submit"
                    className="btn-item"
                    type="primary"
                    onClick={handelForm}
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
    );
};

export default IncentiveForm;
