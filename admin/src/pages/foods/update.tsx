import React, { useState, useEffect } from 'react';
import axios from "axios";
import Heading from "../../components/SectionHeading.tsx";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import API_BASE_URL from "../../constant.ts";
import UploadWidget from "../../components/UploadWidget.tsx";

const UpdateFood: React.FC = () => {
    const { id } = useParams(); 
    const [messageApi, contextHolder] = message.useMessage();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        offer: '',
        archived: false,
        featured: false,
        image: ''
    });
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const foodResponse = await axios.get(`${API_BASE_URL}/api/v1/foods/${id}`);
                setFormData(foodResponse.data);
                
                const categoriesResponse = await axios.get(`${API_BASE_URL}/api/v1/categories`);
                setCategories(categoriesResponse.data);
            } catch (error) {
                messageApi.open({
                    type: 'error',
                    content: 'Failed to fetch data',
                });
            }
        };
        fetchData();
    }, [id, messageApi]);

    const handleChange = (field: keyof typeof formData, value: string | boolean) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : (name === 'price' ? parseFloat(value) : value);
        handleChange(name as keyof typeof formData, inputValue);
    };

    const handleImageUpload = (imageUrl: string) => {
        handleChange("image", imageUrl);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.put(
                `${API_BASE_URL}/api/v1/foods/${id}`,
                formData
            );
            console.log("res",res)
            messageApi.open({
                type: 'success',
                content: 'Food Updated',
            });
            navigate("/foods");
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Failed to update Food',
            });
        }
    };

    return (
        <div className={"mt-4 mx-7 text-sm"}>
            {contextHolder}
            <div className={"border-b mb-4 pb-4"}>
                <Heading
                    title={"Update Food"}
                    subtitle={"Update Food Details"}
                />
            </div>
            <form
                className={"flex flex-row flex-wrap gap-[30px]"}
                onSubmit={handleSubmit}
            >
                <div className={"flex flex-col gap-3"}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData?.name || ""}
                        className={"border rounded p-2.5 w-[280px]"}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={"flex flex-col gap-3"}>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData?.price || ""}
                        className={"border rounded p-2.5 w-[280px]"}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={"flex flex-col gap-3"}>
                    <label>Category</label>
                    <select
                        className={"border rounded p-2.5 w-[280px]"}
                        name="category"
                        value={formData?.category || ""}
                        onChange={handleInputChange}
                    >
                        <option disabled value={""}>Select Category</option>
                        {categories.map((data: any, key: number) => (
                            <option key={key} value={data.name}>
                                {data.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={"flex flex-col gap-3"}>
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formData?.description || ""}
                        className={"border rounded p-2.5 w-[280px]"}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={"flex flex-col gap-3"}>
                    <label>Offer</label>
                    <input
                        type="text"
                        name="offer"
                        value={formData?.offer || ""}
                        className={"border rounded p-2.5 w-[280px]"}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={"flex items-start w-[280px] gap-3 border p-2 rounded"}>
                    <input
                        type="checkbox"
                        name="featured"
                        checked={formData?.featured || false}
                        onChange={handleInputChange}
                    />
                    <div>
                        <p>Featured</p>
                        <span>This product will appear on the home page</span>
                    </div>
                </div>

                <div className={"flex items-start w-[280px] gap-3 border p-2 rounded"}>
                    <input
                        type="checkbox"
                        name="archived"
                        checked={formData?.archived || false}
                        onChange={handleInputChange}
                    />
                    <div>
                        <p>Archived</p>
                        <span>This product will be removed from the food page</span>
                    </div>
                </div>
                <UploadWidget onImageUpload={handleImageUpload}/>
                {formData.image && (
                    <img
                        src={formData.image}
                        alt="food image"
                        className="w-72 h-60 object-cover"
                    />
                )}
                <button
                    className={"w-[80px] h-[40px] bg-black text-white p-2 rounded"}
                    type="submit"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateFood;
