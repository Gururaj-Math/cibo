import React from 'react';
import { useEffect, useRef } from 'react';
const UploadWidget: React.FC = ({ onImageUpload }) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'sanket12',
            upload_preset: 'plcy9ur1',
        }, function (error, result) {
            if (!error && result && result.event === "success") {
                onImageUpload(result.info.secure_url);
            }
        });

    }, [onImageUpload]);
    return (
        <>
            <p
                onClick={() => widgetRef.current.open()}
                className="text-black border rounded h-12 px-4 flex justify-center items-center cursor-pointer"
            >
                Upload an Image
            </p>
        </>
    );
};

export default UploadWidget;