import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card } from "antd";

import CashForm from "./CashForm";

function CreateCashAdvance({ props, record }) {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        agent: record.agent || "-- Select--",
        branch: record.branch || "-- Select--",
        account: record.account || "-- Select--",
        paymentmethod: record.paymentmethod || "-- Select--",
        amount: record.amount,
        cheque: record.cheque,
        drawn: record.drawn,
        details: record.details,
    });

    const submitForm = (values) => {
        post("/admin/cashadvance/store", data);
    };

    //update form submission
    const updateForm = (values) => {
        patch(`/admin/cashadvance/${record.id}`, data);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Cash Advance`}>
                <CashForm
                    data={data}
                    setData={setData}
                    saveButton={"Save"}
                    submitForm={record.id == undefined ? submitForm : ""}
                />
            </Card>
        </>
    );
}

CreateCashAdvance.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateCashAdvance;
