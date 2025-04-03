import React from 'react';
import Spinner from '../components/common/Spinner';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Core/Dashboard/Sidebar';

const Dashboard = () => {
    const { loading: profileLoading } = useSelector((state) => state.profile);
    const { loading: authLoading } = useSelector((state) => state.auth);

    if (authLoading || profileLoading) {
        return (
            <div className="flex h-screen justify-center items-center">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white h-full">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
