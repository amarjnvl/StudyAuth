import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* Error Code */}
            <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

            {/* Message */}
            <p className="text-xl text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>

            {/* Go Back Button */}
            <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default ErrorPage;
