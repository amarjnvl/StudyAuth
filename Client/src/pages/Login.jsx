import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
    return (
        <div className="h-screen flex items-center justify-center">
            <Template
                title="Welcome Back"
                description1="Build skills for today, tomorrow, and beyond."
                description2="Education to future-proof your career."
                image={loginImg}
                formType="login"
                className="w-[450px] bg-[#161D29] p-10 rounded-md shadow-md"
            />
        </div>
    )
}

export default Login
