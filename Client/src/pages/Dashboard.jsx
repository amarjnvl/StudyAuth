import React from 'react'
import Spinner from '../components/common/Spinner'
import { useSelector } from 'react-redux'

import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Core/Dashboard/Sidebar'


const Dashboard = () => {

    const { loading: profileLoading } = useSelector((state) => state.profile);
    const { loading: authloading } = useSelector((state) => state.auth);

    if (authloading || profileLoading) {
        return (
            <div>
                <Spinner />
            </div>
        )
    }
    return (
        <div>
            <Sidebar />
            <div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard