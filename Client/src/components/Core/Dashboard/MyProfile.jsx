import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';
import { RiEditBoxLine } from 'react-icons/ri';

// Reusable component for displaying user details
const UserDetails = ({ label, value, placeholder }) => (
    <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-800 font-medium">{value || placeholder}</p>
    </div>
);

const MyProfile = () => {
    const { user } = useSelector((state) => state.profile);
    const navigate = useNavigate();

    const formattedDate = (date) => {
        if (!date) return 'Add Date Of Birth';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return (
        <div className="flex flex-row gap-8 items-start p-6">
            {/* Main Profile Section */}
            <div className="w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800 border-b pb-4">My Profile</h1>

                {/* Profile Info */}
                <div className="flex flex-row items-center justify-between mt-6">
                    <div className="flex items-center gap-6">
                        <img
                            src={user?.image || "/default-profile.png"}
                            alt={`${user?.firstName[0] + user?.lastName[0]}`}
                            className="h-20 w-20 rounded-full border border-gray-300 shadow-sm"
                        />
                        <div>
                            <p className="text-xl font-semibold">{user?.firstName} {user?.lastName}</p>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>
                    </div>
                    <IconBtn
                        text="Edit"
                        onClick={() => navigate('/dashboard/settings')}
                        customClasses="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    />
                </div>

                {/* About Section */}
                <div className="mt-6 border-t pt-4">
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-gray-700">About</p>
                        <IconBtn text="Edit" onClick={() => navigate('/dashboard/settings')}>
                            <RiEditBoxLine />
                        </IconBtn>
                    </div>
                    <p className="text-gray-600 mt-2">{user?.additionalDetails?.about || "Write Something About Yourself"}</p>
                </div>

                {/* Personal Details */}
                <div className="mt-6 border-t pt-4">
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-gray-700">Personal Details</p>
                        <IconBtn text="Edit" onClick={() => navigate('/dashboard/settings')}>
                            <RiEditBoxLine />
                        </IconBtn>
                    </div>

                    {/* Row Layout */}
                    <div className="flex flex-row gap-12 mt-4">
                        {/* Column 1 */}
                        <div className="flex flex-col space-y-4">
                            <UserDetails label="First Name" value={user?.firstName} />
                            <UserDetails label="Email" value={user?.email} />
                            <UserDetails label="Gender" value={user?.additionalDetails?.gender} placeholder="Add Gender" />
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col space-y-4">
                            <UserDetails label="Last Name" value={user?.lastName} />
                            <UserDetails label="Phone Number" value={user?.additionalDetails?.contactNumber} placeholder="Add Contact Number" />
                            <UserDetails label="Date of Birth" value={formattedDate(user?.additionalDetails?.dateOfBirth)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
