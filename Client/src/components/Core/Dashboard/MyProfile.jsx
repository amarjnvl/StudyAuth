import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'
import { RiEditBoxLine } from 'react-icons/ri'

const MyProfile = () => {
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate()

    const formattedDate = (date) => {
        if (!date) return 'Add Date Of Birth'
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString(undefined, options)
    }

    return (
        <>
            <div>
                <h1>My Profile</h1>
                <div>
                    <div>
                        <img src={user?.image} alt={`${user?.firstName[0] + user?.lastName[0]}`} />
                        <div>
                            <p>{user?.firstName + ' ' + user?.lastName}</p>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    <IconBtn
                        text='Edit'
                        onClick={() => navigate('/dashboard/settings')}
                    />
                </div>
                <div>
                    <div>
                        <p>About</p>
                        <IconBtn
                            text='Edit'
                            onClick={() => navigate('/dashboard/settings')}
                        >
                            <RiEditBoxLine />
                        </IconBtn>
                    </div>
                    <p>{user?.additionalDetails?.about ?? 'Write Something About Yourself'}</p>
                </div>
                <div>
                    <div>
                        <p>Personal Details</p>
                        <IconBtn
                            text='Edit'
                            onClick={() => navigate('/dashboard/settings')}
                        >
                            <RiEditBoxLine />
                        </IconBtn>
                    </div>
                    <div>
                        <div>
                            <p>First Name</p>
                            <p>{user?.firstName}</p>
                        </div>
                        <div>
                            <p>Email</p>
                            <p>{user?.email}</p>
                        </div>
                        <div>
                            <p>Gender</p>
                            <p>{user?.additionalDetails?.gender ?? 'Add Gender'}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Last Name</p>
                            <p>{user?.lastName}</p>
                        </div>
                        <div>
                            <p>Phone Number</p>
                            <p>{user?.additionalDetails?.contactNumber ?? 'Add Contact Number'}</p>
                        </div>
                        <div>
                            <p>Date Of Birth</p>
                            <p>{formattedDate(user?.additionalDetails?.dateOfBirth)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile
