import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Venturesform from "./Venturesform";
//custom css
import "./ventures.css";
import { Card, Form } from "antd";

function Venturescreate({ props, record }) {
    const [form] = Form.useForm();

    const { data, setData, post, patch, processing, errors, reset } = useForm({
        code: record.code,
        sstatus: record.sstatus,
        title: record.title,
        templateslug: record.templateslug,
        slug: record.slug,
        mapheight: record.mapheight,
        location: record.location,
        mapwidth: record.mapwidth,
        branch: record.branch,
        salevel: record.salevel,
        locationimg: record.locationimg,
        layout: record.layout,
        layoutmap: record.layoutmap,
        pagetitleseo: record.pagetitleseo,
        banner: record.banner,
        largemap: record.largemap,
        metadescription: record.metadescription,
        metakeywords: record.metakeywords,
        address: record.address,
        published: record.published,
        mainbody: record.mainbody,
        extrabody: record.extrabody,
        bodystyles: record.bodystyles,
        otherdetails: record.otherdetails,
    });

    //submitHandler
    const submitHandler = (values) => {
        console.log(data);
        post("/admin/ventures/store", data);
    };

    //updateHandler
    const updateHandler = (values) => {
        console.log(data);
        patch(`/admin/ventures/${record.id}`, data);
    };

    return (
        <>
            <Head title="Ventures" />

            <Card title={`Venture Details`}>
                <Venturesform
                    record={record}
                    submitForm={
                        record.code == undefined ? submitHandler : updateHandler
                    }
                    setData={setData}
                    data={data}
                    savebutton={record.code == undefined ? "Add" : "Save"}
                />
            </Card>
        </>
    );
}

Venturescreate.layout = (page) => <AuthenticatedLayout children={page} />;

export default Venturescreate;
