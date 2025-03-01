import React from "react";
import { Link } from "react-router-dom";


const Login = ({ theme }) => {
    return (
        <div
            className={`flex items-center justify-center min-h-screen transition-all ${
                theme === "light" ? "bg-zinc-900 text-white" : "bg-gray-100 text-black"
            }`}
        > 
            <div
                className={`p-8 rounded-lg shadow-lg w-full max-w-md transition-all ${
                    theme === "light" ? "bg-zinc-800" : "bg-white"
                }`}
            >
                <h2 className="text-2xl font-bold text-center">Login to SocialGLA</h2>
                <p className="text-center text-gray-500 mt-2">
                    Enter your college email and password to access your account
                </p>

                {/* Form */}
                <form className="mt-6">
                    {/* Email */}
                    <label className="block font-medium">College Email</label>
                    <input
                        type="email"
                        placeholder="you@gla.ac.in"
                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />

                    {/* Password */}
                    <div className="flex justify-between items-center mt-4">
                        <label className="block font-medium">Password</label>
                        <Link
                            to="/forgot-password"
                            className="text-purple-600 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <input
                        type="password"
                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />

                    {/* Sign In Button */}
                    <button className="w-full mt-6 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                        Sign In
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="text-center mt-4 text-gray-500">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-purple-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
