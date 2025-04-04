import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
    return (
        <Template
            title="Join the millions learning to code with StudyNotion for free"
            description1="Build skills for today, tomorrow, and beyond."
            description2="Education to future-proof your career."
            image={signupImg}
            formType="signup"
        // className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-10"
        />
    )
}

export default Signup