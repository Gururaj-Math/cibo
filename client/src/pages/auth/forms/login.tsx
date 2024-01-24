import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import API_URI from '../../../constant.ts';
import { useCookies } from 'react-cookie';
import { logInStart, logInSuccess, logInFailure } from '../../../redux/user/userSlice';
import { useDispatch } from 'react-redux';

interface FormData {
    email: string;
    password_digest: string;
}

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [_, setCookies] = useCookies(['access_token']);
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password_digest: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            dispatch(logInStart());
            const response = await axios.post(
                `${API_URI}/api/v1/user/login`,
                formData);
            dispatch(logInSuccess(response.data));
            setCookies('access_token', response.data.accessToken);
            console.log(response);
        } catch (error) {
            console.log(error);
            dispatch(logInFailure(error));
        }
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    name="password_digest"
                    placeholder="Password"
                    value={formData.password_digest}
                    onChange={handleInputChange}
                />

                <button type="submit">login</button>
            </form>
        </>
    );
};

export default Login;
