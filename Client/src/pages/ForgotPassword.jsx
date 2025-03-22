import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPasswordResetToken } from "../services/operations/authAPI";

const ForgotPassword = () => {
    const { loading } = useSelector((state) => state.auth);
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0E11] px-4">
            <div className="w-full max-w-md bg-[#0B0E11] text-white p-6 rounded-lg text-center">
                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <>
                        <h1 className="text-2xl font-semibold">
                            {!emailSent ? "Reset your password" : "Check Your Email"}
                        </h1>

                        <p className="text-gray-400 mt-2">
                            {!emailSent
                                ? "Have no fear. We’ll email you instructions to reset your password. If you don't have access to your email, we can try account recovery."
                                : `Check your email. We have sent the reset email to ${email}.`}
                        </p>

                        {!emailSent && (
                            <form onSubmit={handleOnSubmit} className="mt-6 text-left">
                                <label className="block">
                                    <span className="text-gray-300 font-medium">Email Address *</span>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter Your Email"
                                        className="w-full mt-2 px-4 py-2 bg-[#161B22] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                    />
                                </label>
                                <button type="submit" className="w-full mt-6 bg-blue-500 text-black py-2 rounded-lg font-medium hover:bg-blue-500 transition">
                                    Reset Password
                                </button>
                            </form>
                        )}
                        {emailSent && (
                            <button
                                type="button"
                                className="w-full mt-6 bg-blue-500 text-black py-2 rounded-lg font-medium hover:bg-blue-500 transition"
                                onClick={() => setEmailSent(false)}
                            >
                                Resend Email
                            </button>
                        )}

                        <div className="mt-6 -ml-[300px]">
                            <Link to="/login" className="text-gray-400 hover:text-white flex items-center justify-center">
                                ← Back to login
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
