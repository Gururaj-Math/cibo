import {useState, useEffect} from 'react';
import Heading from "../../components/SectionHeading.tsx";
import {Link} from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../constant.ts";
import Table from "../../components/Table.tsx";
import ApiCalls from "../../components/ApiCalls.tsx";
import DateFormatter from "../../utils/dateFormatter.ts";

const Index = () => {
    const tableHeaders = ['Name', 'Date'];
    const objectKey = ['name']
    const [tableData, setTableData] = useState<any[]>([]);

    const getCategories = async () => {
        console.log("updated")
        try{
            const categories = await axios.get(`${API_BASE_URL}/api/v1/categories`)
            const fetchedTableData = categories.data.map(item => ({
                id: item._id,
                name: item.name,
                date: DateFormatter(item.created_at)
            }))
            setTableData(fetchedTableData)
        }catch (error){
            console.log(error)
        }
    };

    useEffect(() => {
        getCategories();
    }, []);
    
    return (
        <div className="mx-7">
            <div className="flex justify-between items-center mt-4 pb-4 border-b">
                <Heading
                    title="Categories"
                    subtitle="Manage Categories for your restaurant"
                />
                <div>
                    <Link to="/categories/create">
                        <button>Add</button>
                    </Link>
                </div>
            </div>
            <div className="my-4 w-96">
                <input
                    placeholder={"Search"}
                    className={"border p-2 rounded w-[400px] text-sm"}
                />
            </div>
            <Table
                type="categories"
                headers={tableHeaders}
                data={tableData}
                objectKey={objectKey}
                onUpdate={getCategories}
            />
            <ApiCalls
                category={"Categories"}
                get={`${API_BASE_URL}/api/v1/categories`}
                post={`${API_BASE_URL}/api/v1/categories`}
                put={`${API_BASE_URL}/api/v1/categories/{id}`}
                remove={`${API_BASE_URL}/api/v1/categories/{id}`}
            />
        </div>
    );
};

export default Index;