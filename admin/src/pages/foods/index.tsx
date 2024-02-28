
import {useState, useEffect} from 'react';
import Heading from "../../components/SectionHeading.tsx";
import {Link} from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../constant.ts";
import Table from "../../components/Table.tsx";
import ApiCalls from "../../components/ApiCalls.tsx";
import DateFormatter from "../../utils/dateFormatter.ts";
const Index = () => {
    const tableHeaders = ['Name', 'Featured', 'Archived' ,'Price', 'Category', 'Date'];
    const objectKey = ['name', 'featured', 'archived', 'price', 'category']
    const [tableData, setTableData] = useState<any[]>([]);

    useEffect(() => {
        const getFoods = async () => {
            try{
                const foods = await axios.get(`${API_BASE_URL}/api/v1/foods`)
                const fetchedTableData = foods.data.map(item => ({
                    id: item._id,
                    name: item.name,
                    featured: item.featured,
                    archived: item.archived,
                    price: item.price,
                    category: item.category,
                    date: DateFormatter(item.created_at)
                }))
                setTableData(fetchedTableData)
            } catch (error){
                console.log(error)
            }
        };
        getFoods();
    }, []);
    return (
        <div className={"mx-7"}>
            <div className="flex justify-between items-center mt-4 pb-4 border-b">
                <Heading
                    title="Food Items"
                    subtitle="Manage Food Items for your restaurant"
                />
                <div>
                    <Link to="/foods/create">
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
            />
            <ApiCalls
                category={"Foods"}
                get={`${API_BASE_URL}/api/v1/foods`}
                post={`${API_BASE_URL}/api/v1/foods`}
                put={`${API_BASE_URL}/api/v1/foods/{id}`}
                remove={`${API_BASE_URL}/api/v1/foods/{id}`}
            />
        </div>
    );
};

export default Index;