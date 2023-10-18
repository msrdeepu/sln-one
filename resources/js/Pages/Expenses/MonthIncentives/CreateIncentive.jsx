import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";
import IncentiveForm from "./IncentiveForm";

function CreateIncentive({ props, record }) {
    //useFormHook
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        incentivetype: record.incentivetype,
        duration: record.duration,
        agent: record.agent,
        account: record.account,
        business: record.business,
        company: record.company,
        paidon: record.paidon,
        amount: record.amount,
        tds: record.tds,
        gst: record.gst,
        chequeno: record.chequeno,
        ddnum: record.ddnum,
        transactionid: record.transactionid,
        description: record.description,
    });

    const submitForm = (values) => {
        console.log(data);
        post("/admin/monthlyincentive/store", data);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, to Incentive Page`}>
                <IncentiveForm
                    saveButton={"Save"}
                    record={record}
                    submitForm={submitForm}
                    data={data}
                    setData={setData}
                />
            </Card>
        </>
    );
}

CreateIncentive.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateIncentive;
