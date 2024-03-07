import { Navigate, Outlet } from 'react-router-dom';

export default function AuthLayout() {
    const isAuthenticated = document.cookie.includes('username');

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <div>
                    <section>
                        <Outlet />
                    </section>
                </div>
            )}
        </>
    );
}
