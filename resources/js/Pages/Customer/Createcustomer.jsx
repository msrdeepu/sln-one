import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";
import Customerform from "./Customerform";

function Createcustomer({ props, record }) {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        surname: record.surname,
        fullname: record.fullname,
        careof: record.careof,
        carename: record.carename,
        organization: record.organization,
        branch: record.branch,
        pannumber: record.pannumber,
        adharnumber: record.adharnumber,
        gstax: record.gstax,
        dateofbirth: record.dateofbirth,
        mobile: record.mobile,
        phone: record.phone,
        altmobile: record.altmobile,
        whatsapp: record.whatsapp,
        occupation: record.occupation,
        nationality: record.nationality,
        joinedon: record.joinedon,
        address: record.address,
        country: record.country,
        state: record.state,
        district: record.district,
        pincode: record.pincode,
        nomineename: record.nomineename,
        nomineerelation: record.nomineerelation,
        nomineedob: record.nomineedob,
        photo: record.photo,
        active: record.active,
        loginhas: record.loginhas,
        nomineeaddress: record.nomineeaddress,
    });
    const submitForm = (values) => {
        console.log(data);
        post("/admin/customer/store", data);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Customer Full Details`}>
                <Customerform
                    submitForm={submitForm}
                    data={data}
                    setData={setData}
                    saveButton={"Save"}
                />
            </Card>
        </>
    );
}

Createcustomer.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createcustomer;
