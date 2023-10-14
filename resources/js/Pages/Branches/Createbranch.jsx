import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card } from "antd";
import BranchForm from "./BranchForm";

function Createbranch({ props, record }) {
    //useFormHook
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        code: record.code,
        company: record.company || "-- Select--",
        status: record.status,
        location: record.location,
        email: record.email,
        phonenumber: record.phonenumber,
        mobilenumber: record.mobilenumber,
        address: record.address,
    });

    const submitForm = (values) => {
        console.log(data);
        post("/admin/branches/store", data);
    };

    //update form submission
    const updateForm = (values) => {
        patch(`/admin/branches/${record.id}`, data);
    };

    return (
        <>
            <Head title="Dashboard" />
            <Card title={`Branch Details`}>
                <BranchForm
                    submitForm={
                        record.code == undefined ? submitForm : updateForm
                    }
                    setData={setData}
                    data={data}
                    saveButton={record.code == undefined ? "Add" : "Save"}
                />
            </Card>
        </>
    );
}

Createbranch.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createbranch;
