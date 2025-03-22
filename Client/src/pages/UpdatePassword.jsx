import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../services/operations/authAPI";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const UpdatePassword = () => {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const { loading } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const { password, confirmPassword } = formData;
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split("/").at(-1);
        dispatch(resetPassword(password, confirmPassword, token));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0E11] px-4">
            <div className="w-full max-w-md bg-[#0B0E11] text-white p-6 rounded-lg text-center">
                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <>
                        <h1 className="text-2xl font-semibold">Choose a new password</h1>
                        <p className="text-gray-400 mt-2">
                            Almost done! Enter your new password and you're all set.
                        </p>

                        <form onSubmit={handleOnSubmit} className="mt-6 text-left">
                            {/* Password Field */}
                            <label className="block relative">
                                <span className="text-gray-300 font-medium">New Password *</span>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        required
                                        placeholder="Enter Your Password"
                                        value={password}
                                        onChange={handleOnChange}
                                        className="w-full mt-2 px-4 py-2 bg-[#161B22] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                    />
                                    <span
                                        className="absolute top-3 right-4 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                    </span>
                                </div>
                            </label>

                            {/* Confirm Password Field */}
                            <label className="block relative mt-4">
                                <span className="text-gray-300 font-medium">Confirm New Password *</span>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        required
                                        placeholder="Enter Confirm Password"
                                        value={confirmPassword}
                                        onChange={handleOnChange}
                                        className="w-full mt-2 px-4 py-2 bg-[#161B22] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                    />
                                    <span
                                        className="absolute top-3 right-4 text-gray-400 cursor-pointer"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                    </span>
                                </div>
                            </label>

                            <button className="w-full mt-6 bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-500 transition">
                                Reset Password
                            </button>

                            <div className="mt-6">
                                <Link to="/login" className="text-gray-400 hover:text-white flex items-center justify-center">
                                    ← Back to login
                                </Link>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default UpdatePassword;
