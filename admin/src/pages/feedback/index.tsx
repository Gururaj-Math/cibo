import React, {useState, useEffect} from 'react';
import axios from "axios";
import API_BASE_URL from "../../constant.ts";
import DateFormatter from "../../utils/dateFormatter.ts";
import Heading from "../../components/SectionHeading.tsx";
import {Link} from "react-router-dom";
import Table from "../../components/Table.tsx";
import ApiCalls from "../../components/ApiCalls.tsx";

const Index:React.FC = () => {
    const tableHeaders = ["Name", "Email", "Message", "Date"];
    const objectKey = ["name", "email", "message"];
    const [tableData, setTableData] = useState<any[]>([]);

    const getFeedbacks = async () => {
        try {
            const feedbacks  = await axios.get(`${API_BASE_URL}/api/v1/feedbacks`)
            const fetchedTableData = feedbacks.data.map(feedback => ({
                id: feedback._id,
                name: feedback.name,
                email: feedback.email,
                message: feedback.message,
                date: DateFormatter(feedback.created_at)
            }))
            setTableData(fetchedTableData);
        }catch (error){
            console.error(error)
        }
    }

    useEffect(() => {
        getFeedbacks();
    }, []);
    return (
        <div className={"mx-7"}>
            <div className="mt-4 pb-4 border-b">
                <Heading
                    title="Feedbacks"
                    subtitle="Feedback by users"
                />
            </div>
            <div className="my-4 w-96">
                <input
                    placeholder={"Search"}
                    className={"border p-2 rounded w-[400px] text-sm"}
                />
            </div>
            <Table
                type="feedbacks"
                headers={tableHeaders}
                data={tableData}
                objectKey={objectKey}
                onUpdate={getFeedbacks}
            />
            <ApiCalls
                category={"Feedbacks"}
                get={`${API_BASE_URL}/api/v1/feedbacks`}
                post={`${API_BASE_URL}/api/v1/feedbacks`}
                put={`${API_BASE_URL}/api/v1/feedbacks/{id}`}
                remove={`${API_BASE_URL}/api/v1/feedbacks/{id}`}
            />
        </div>
    );
};

export default Index;