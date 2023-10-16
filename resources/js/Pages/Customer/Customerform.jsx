import React from "react";
import { router } from "@inertiajs/react";
import { Col, Row, Form, Input, DatePicker, Select, Radio, Button } from "antd";
const { TextArea } = Input;

const onCancelData = () => {
    window.alert("Are You Sure Want to Cancel?");
    router.get(route("customer.index"));
};

const Customerform = ({
    props,
    saveButton,
    data,
    setData,
    submitForm,
    record,
}) => {
    const [form] = Form.useForm();

    const handleCareOf = (value) => {
        setData("careof", value);
        console.log(value);
    };

    const handleBranch = (value) => {
        setData("branch", value);
        console.log(value);
    };

    const handleOccupation = (value) => {
        setData("occupation", value);
        console.log(value);
    };

    const handleNationality = (value) => {
        setData("nationality", value);
        console.log(value);
    };

    const handleJoinDate = (value) => {
        setData("joinedon", value);
        console.log(value);
    };

    const handleDob = (value) => {
        setData("dateofbirth", value);
        console.log(value);
    };
    const handleNomDob = (value) => {
        setData("nomineedob", value);
        console.log(value);
    };

    const handleCountry = (value) => {
        setData("country", value);
        console.log(value);
    };

    const handleState = (value) => {
        setData("state", value);
        console.log(value);
    };

    const handleDistrict = (value) => {
        setData("district", value);
        console.log(value);
    };

    const handleActive = (value) => {
        setData("active", value);
        console.log(value);
    };

    const handleLoginHas = (value) => {
        setData("loginhas", value);
        console.log(value);
    };

    const handelForm = () => {
        form.submit();
        form.setFieldsValue({
            surname: "",
            fullname: "",
            careof: "",
            code: "",
            carename: "",
            organization: "",
            branch: "",
            pannumber: "",
            adharnumber: "",
            gstax: "",
            dateofbirth: "",
            mobile: "",
            phone: "",
            altmobile: "",
            whatsapp: "",
            occupation: "",
            nationality: "",
            joinedon: "",
            address: "",
            country: "",
            state: "",
            district: "",
            pincode: "",
            nomineename: "",
            nomineerelation: "",
            nomineedob: "",
            photo: "",
            active: "",
            loginhas: "",
            nomineeaddress: "",
        });
    };

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={submitForm}
            initialValues={{
                surname: data.surname,
                fullname: data.fullname,
                careof: data.careof,
                carename: data.carename,
                code: data.code,
                organization: data.organization,
                branch: data.branch,
                pannumber: data.pannumber,
                adharnumber: data.adharnumber,
                gstax: data.gstax,
                dateofbirth: data.dateofbirth,
                mobile: data.mobile,
                phone: data.phone,
                altmobile: data.altmobile,
                whatsapp: data.whatsapp,
                occupation: data.occupation,
                nationality: data.nationality,
                joinedon: data.joinedon,
                address: data.address,
                country: data.country,
                state: data.state,
                district: data.district,
                pincode: data.pincode,
                nomineename: data.nomineename,
                nomineerelation: data.nomineerelation,
                nomineedob: data.nomineedob,
                photo: data.photo,
                active: data.active,
                loginhas: data.loginhas,
                nomineeaddress: data.nomineeaddress,
            }}
        >
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Sur Name" name="surname">
                        <Input
                            name="surname"
                            placeholder="Enter Sur Name"
                            onChange={(e) => setData("surname", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Full Name" name="fullname">
                        <Input
                            name="fullname"
                            placeholder="Enter Full Name"
                            onChange={(e) =>
                                setData("fullname", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Care Of" name="careof">
                        <Select
                            name="careof"
                            options={[
                                {
                                    value: "SON",
                                    label: "SON",
                                },
                            ]}
                            onChange={handleCareOf}
                            placeholder="--select care of--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Enter Person Name" name="carename">
                        <Input
                            name="carename"
                            placeholder="Enter Care of Person Name"
                            onChange={(e) =>
                                setData("carename", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Organization" name="organization">
                        <Input
                            name="organization"
                            placeholder="Enter Organization Name"
                            onChange={(e) =>
                                setData("organization", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Branch" name="branch">
                        <Select
                            name="branch"
                            options={[
                                {
                                    value: "Branch",
                                    label: "Branch",
                                },
                            ]}
                            onChange={handleBranch}
                            placeholder="--select branch--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Code" name="code">
                        <Input
                            name="code"
                            placeholder="Enter Code"
                            onChange={(e) => setData("code", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Pan Number" name="pannumber">
                        <Input
                            name="pannumber"
                            placeholder="Enter Pan Number"
                            onChange={(e) =>
                                setData("pannumber", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Adhar Number" name="adharnumber">
                        <Input
                            type="number"
                            name="adharnumber"
                            placeholder="Enter Adhar Number"
                            onChange={(e) =>
                                setData("adharnumber", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="GST / TAX ID" name="gstax">
                        <Input
                            name="gstax"
                            placeholder="Enter GST / TAX ID"
                            onChange={(e) => setData("gstax", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Date Of Birth" name="dateofbirth">
                        <DatePicker
                            style={{ width: "100%" }}
                            name="dateofbirth"
                            onChange={handleDob}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Mobile Number" name="mbile">
                        <Input
                            name="mobile"
                            type="number"
                            placeholder="Enter Mobile Number"
                            onChange={(e) => setData("mobile", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Phone Number" name="phone">
                        <Input
                            name="phone"
                            placeholder="Enter Mobile Number"
                            type="number"
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Alternate Mobile Number" name="altmobile">
                        <Input
                            name="altmobile"
                            placeholder="Enter Alt.Mobile Numner"
                            type="number"
                            onChange={(e) =>
                                setData("altmobile", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="WhatsApp Number" name="whatsapp">
                        <Input
                            name="whatsapp"
                            placeholder="Enter Your Whats App Number"
                            type="number"
                            onChange={(e) =>
                                setData("whatsapp", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Slect Occupation" name="occupation">
                        <Select
                            name="occupation"
                            options={[
                                {
                                    value: "Manager",
                                    label: "Manager",
                                },
                            ]}
                            onChange={handleOccupation}
                            placeholder="--select manager--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Nationality" name="nationality">
                        <Select
                            name="nationality"
                            options={[
                                {
                                    value: "Indian",
                                    label: "Indian",
                                },
                            ]}
                            onChange={handleNationality}
                            placeholder="--select Naionality--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Joined On" name="joinedon">
                        <DatePicker
                            style={{ width: "100%" }}
                            name="joinedon"
                            onChange={handleJoinDate}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Address" name="address">
                        <TextArea
                            rows={3}
                            name="address"
                            placeholder="Enter Customer Address"
                            onChange={(e) => setData("address", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Country" name="country">
                        <Select
                            name="country"
                            options={[
                                {
                                    value: "India",
                                    label: "India",
                                },
                            ]}
                            onChange={handleCountry}
                            placeholder="--select Country--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select State" name="state">
                        <Select
                            name="state"
                            options={[
                                {
                                    value: "AP",
                                    label: "AP",
                                },
                            ]}
                            onChange={handleState}
                            placeholder="--select State--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select District" name="district">
                        <Select
                            name="district"
                            options={[
                                {
                                    value: "Tirupati",
                                    label: "Tirupati",
                                },
                            ]}
                            onChange={handleDistrict}
                            placeholder="--select branch--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Pin Code" name="pincode">
                        <Input
                            name="pincode"
                            placeholder="Enter Postal Code"
                            onChange={(e) => setData("pincode", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Nominee Name" name="nomineename">
                        <Input
                            name="nomineename"
                            placeholder="Enter Nominee Name"
                            onChange={(e) =>
                                setData("nomineename", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item
                        label="Relationship With Nominee"
                        name="nomineerelation"
                    >
                        <Input
                            name="nomineerelation"
                            placeholder="Enter Relationship with Nominee"
                            onChange={(e) =>
                                setData("nomineerelation", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Nominee DOB" name="nomineedob">
                        <DatePicker
                            style={{ width: "100%" }}
                            name="nomineedob"
                            onChange={handleNomDob}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Photo" name="photo">
                        <Input
                            name="photo"
                            type="file"
                            onChange={(e) =>
                                setData("photo", e.target.files[0])
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Active" name="active">
                        <Radio.Group name="active" onChange={handleActive}>
                            <Radio value={"YES"}>YES</Radio>
                            <Radio value={"NO"}>NO</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Has Login" name="loginhas">
                        <Radio.Group name="loginhas" onChange={handleLoginHas}>
                            <Radio value={"YES"}>YES</Radio>
                            <Radio value={"NO"}>NO</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Nominee Address" name="nomineeaddress">
                        <TextArea
                            rows={3}
                            name="nomineeaddress"
                            placeholder="Enter Nominee Address"
                            onChange={(e) =>
                                setData("nomineeaddress", e.target.value)
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
                    onClick={handelForm}
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
    );
};

export default Customerform;
