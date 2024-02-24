import React from 'react';
import { IoCopyOutline } from "react-icons/io5";
interface ApiProps {
    category: string;
    get: string;
    put: string;
    post: string;
    remove: string;
}
const Api: React.FC<ApiProps> = ({category,get, put, post, remove}) => {
    const methods = [
        { label: 'GET', value: get },
        { label: 'PUT', value: put },
        { label: 'POST', value: post },
        { label: 'DELETE', value: remove },
    ];

    return (
        <div>
            <div className="my-4">
                <h1 className="text-2xl font-bold">API</h1>
                <p className="text-sm text-gray-500">Api Calls for {category} </p>
            </div>
            {methods.map((method, index) => (
                <div key={index} className="border p-4 mb-4">
                    <div className="flex items-center gap-2 mb-4">
                        <p className={"text-black text-[10px] p-2 rounded-[30px] w-[60px] text-center border"}>{method.label}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="bg-gray-100 text-xs p-1 rounded-lg">{method.value}</p>
                        <IoCopyOutline
                            className="cursor-pointer text-sm"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Api;