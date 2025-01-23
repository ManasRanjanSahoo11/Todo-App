import { useNavigate } from "react-router-dom";
import Signup from "./signup";
import Signin from "./signin";

// Custom Button Component
const CustomButton = ({ children, className, onClick }) => (
    <button
        className={` text-white px-10 py-3 text-lg rounded-full transition ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
);

// Custom Icon Component
const CustomCheckCircle = ({ className }) => (
    <div className={`w-6 h-6 bg-purple-600 text-white flex items-center justify-center rounded-full ${className}`}>
        ✓
    </div>
);

const Landing = () => {
    const features = [
        {
            title: "Simple & Intuitive",
            description: "Easy to use interface that helps you stay organized.",
        },
        {
            title: "Stay Productive",
            description: "Track your tasks and boost your productivity.",
        },
        {
            title: "Access Anywhere",
            description: "Your todos sync across all your devices.",
        },
    ];

    const navigate = useNavigate()

    const handleSignUpClick = () => {
        navigate("/signup");
    };

    const handleSignInClick = () => {
        navigate("/signin");
    };

    return (
        <div className="min-h-screen w-full bg-gray-900 flex flex-col">
            {/* Hero Section */}
            <header className="bg-gray-900 py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-50 mb-6">
                        Organize Your Life, <span className="text-purple-600">One Task at a Time</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        The simple, intuitive way to manage your daily tasks and boost your productivity.
                    </p>
                    <div className="flex items-center justify-center gap-10 mt-16">
                        <CustomButton className={"bg-purple-600 hover:bg-purple-700"} onClick={handleSignUpClick}>Sign up</CustomButton>
                        <CustomButton className={"bg-purple-700 hover:bg-purple-600 "} onClick={handleSignInClick}>Sign in</CustomButton>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                            style={{ animationDelay: `${(index + 1) * 200}ms` }}
                        >
                            <div className="flex items-center mb-4">
                                <CustomCheckCircle className="mr-2" />
                                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                            </div>
                            <p className="text-gray-800">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8 text-center">
                <p className="text-gray-600">&copy; 2025 TodoApp. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;