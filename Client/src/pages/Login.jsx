import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
    return (
        <div className="h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
            <Template
                title="Welcome Back"
                description1="Build skills for today, tomorrow, and beyond."
                description2="Education to future-proof your career."
                image={loginImg}
                formType="login"
                className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
            />
        </div>
    )
}

export default Login
