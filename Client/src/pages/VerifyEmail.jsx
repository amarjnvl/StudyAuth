import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OTPInput from "react-otp-input";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
    const { signupData, loading } = useSelector((state) => state.auth);
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, [signupData, navigate]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!signupData) return;

        const { accountType, firstName, lastName, email, password, confirmPassword } = signupData;

        dispatch(
            signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate)
        );
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-center">Verify Email</h1>
                        <p className="text-gray-400 text-center mt-2">
                            A verification code has been sent to your email. Enter the code below:
                        </p>

                        <form onSubmit={handleOnSubmit} className="mt-6">
                            <div className="flex justify-center">
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={<span className="mx-2 text-yellow-400">-</span>}
                                    renderInput={(props) => (
                                        <input
                                            {...props}
                                            className="w-14 h-12 text-center text-lg bg-gray-900 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                        />
                                    )}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 bg-blue-400 text-black py-2 rounded-lg font-medium hover:bg-blue-500 transition"
                            >
                                Verify Email
                            </button>
                        </form>

                        <div className="mt-6 flex flex-col items-center">
                            <Link to="/login" className="text-gray-400 hover:text-white transition">
                                ← Back to login
                            </Link>
                            <button
                                onClick={() => dispatch(sendOtp(signupData?.email, navigate))}
                                className="mt-2 text-yellow-400 hover:text-yellow-500 transition"
                            >
                                Resend OTP
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
