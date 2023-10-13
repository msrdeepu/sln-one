import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";

import CashForm from "./CashForm";

function CreateCashAdvance({ props, record }) {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        agent: record.agent,
        branch: record.branch,
        account: record.account,
        paymentmethod: record.paymentmethod,
        amount: record.amount,
        cheque: record.cheque,
        drawn: record.drawn,
        details: record.details,
    });

    const submitForm = (values) => {
        console.log(data);
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
                    submitForm={submitForm}
                />
            </Card>
        </>
    );
}

CreateCashAdvance.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateCashAdvance;
