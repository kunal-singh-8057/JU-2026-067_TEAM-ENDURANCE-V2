import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Axios from 'axios'

export const ProtectedRoutes = () => {

    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        Axios.get(
            "http://localhost:4500/api/v1/verify",
            {
                withCredentials: true
            }
        )
        .then((res) => {

            console.log("VERIFY RESPONSE:", res.data);

            if (res.data === "success") {
                setuser(true);
            } else {
                setuser(false);
            }

        })
        .catch((error) => {

            console.log("VERIFY ERROR:", error.response?.data || error);
            setuser(false);

        })
        .finally(() => {
            setLoading(false);
        });

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoutes;