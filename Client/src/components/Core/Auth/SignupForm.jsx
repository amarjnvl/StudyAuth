import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"
import Tab from "../../common/Tab"

function SignupForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // student or instructor
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { firstName, lastName, email, password, confirmPassword } = formData

    // Handle input fields, when some value changes
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    // Handle Form Submission
    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error("Passwords Do Not Match")
            return
        }
        const signupData = {
            ...formData,
            accountType,
        }

        // Setting signup data to state
        // To be used after otp verification
        dispatch(setSignupData(signupData))
        // Send OTP to user for verification
        dispatch(sendOtp(formData.email, navigate))

        // Reset
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
        setAccountType(ACCOUNT_TYPE.STUDENT)
    }

    // data to pass to Tab component
    const tabData = [
        {
            id: 1,
            tabName: "Student",
            type: ACCOUNT_TYPE.STUDENT,
        },
        {
            id: 2,
            tabName: "Instructor",
            type: ACCOUNT_TYPE.INSTRUCTOR,
        },
    ]

    return (
        <div className="mt-8 flex flex-col w-full max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6">
            {/* Tab Section */}
            <div className="flex justify-center gap-4 mb-6">
                {tabData.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setAccountType(tab.type)}
                        className={`px-10 py-2 rounded-full font-medium transition-all duration-200 ${accountType === tab.type
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {tab.tabName}
                    </button>
                ))}
            </div>

            {/* Form */}
            <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-5">
                {/* Name Fields */}
                <div className="flex gap-4">
                    {["firstName", "lastName"].map((field) => (
                        <label key={field} className="w-full">
                            <p className="mb-1 text-sm font-medium text-gray-700">
                                {field === "firstName" ? "First Name" : "Last Name"} <sup className="text-red-500">*</sup>
                            </p>
                            <input
                                required
                                type="text"
                                name={field}
                                value={formData[field]}
                                onChange={handleOnChange}
                                placeholder={`Enter ${field === "firstName" ? "first" : "last"} name`}
                                className="w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </label>
                    ))}
                </div>

                {/* Email Field */}
                <label className="w-full">
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Email Address <sup className="text-red-500">*</sup>
                    </p>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleOnChange}
                        placeholder="Enter email address"
                        className="w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </label>

                {/* Password Fields */}
                {[{ name: "password", label: "Create Password", state: showPassword, setState: setShowPassword },
                { name: "confirmPassword", label: "Confirm Password", state: showConfirmPassword, setState: setShowConfirmPassword }].map(({ name, label, state, setState }) => (
                    <label key={name} className="relative w-full">
                        <p className="mb-1 text-sm font-medium text-gray-700">
                            {label} <sup className="text-red-500">*</sup>
                        </p>
                        <input
                            required
                            type={state ? "text" : "password"}
                            name={name}
                            value={formData[name]}
                            onChange={handleOnChange}
                            placeholder={label}
                            className="w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <span
                            onClick={() => setState((prev) => !prev)}
                            className="absolute right-3 top-10 p-2 cursor-pointer text-gray-500 hover:text-gray-700"
                        >
                            {state ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </span>
                    </label>
                ))}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-3 w-full rounded-md bg-blue-600 py-3 text-white font-semibold tracking-wide shadow-md hover:bg-blue-700 transition-all"
                >
                    Create Account
                </button>
            </form>
        </div>

    )
}

export default SignupForm