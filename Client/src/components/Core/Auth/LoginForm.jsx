import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../../services/operations/authAPI"

function LoginForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)

    const { email, password } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password, navigate))
    }

    return (
        <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-full flex-col gap-y-6"
        >
            <label className="w-full">
                <p className="mb-2 text-sm text-gray-700">
                    Email Address <sup className="text-red-500">*</sup>
                </p>
                <input
                    required
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Enter email address"
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-blue-500"
                />
            </label>
            <label className="relative w-full">
                <p className="mb-2 text-sm text-gray-700">
                    Password <sup className="text-red-500">*</sup>
                </p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    placeholder="Enter Password"
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-blue-500"
                />
                <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-11 cursor-pointer text-gray-500"
                >
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
            </label>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot Password
            </Link>
            <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
            >
                Sign In
            </button>
        </form>
    )
}

export default LoginForm