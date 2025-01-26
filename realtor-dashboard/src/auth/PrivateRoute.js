import React from 'react';
import { useAuth } from "./AuthContext";

function PrivateRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <h1>Please log in to access this page.</h1>;
    }

    return <div>{children}</div>;
}

export default PrivateRoute;
