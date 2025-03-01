import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ theme }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        anonymous: "no",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let newErrors = {};

        // First & Last Name validation
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

        if (!formData.email.endsWith("@gla.ac.in")) {
            newErrors.email = "Must be a valid GLA University email";
        }

        // Password validation
        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div
            className={`flex items-center justify-center min-h-screen transition-all ${
                theme === "light" ? "bg-zinc-900 text-white" : "bg-gray-300 text-black"
            }`}
        >
            <div
                className={`p-8 rounded-[31px] shadow-lg w-full max-w-md transition-all ${
                    theme === "light" ? "bg-zinc-800" : "bg-white"
                }`}
            >
                <h2 className="text-2xl font-bold text-center">Create your account</h2>
                <p className="text-center text-gray-500 mt-2">
                    Join SocialGLA using your college email address
                </p>

                {/* Form */}
                <form className="mt-6" onSubmit={handleSubmit}>
                    {/* First & Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </div>
                        <div>
                            <label className="block font-medium">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                        </div>
                    </div>

                    {/* College Email */}
                    <div className="mt-4">
                        <label className="block font-medium">College Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@gla.ac.in"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        <p className="text-xs text-gray-500">Must be a valid GLA University email address</p>
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <label className="block font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <label className="block font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                        )}
                    </div>

                    {/* Anonymous */}
                    <div className="mt-4">
                        <label className="block font-medium">Want to be Anonymous</label>
                        <div className="flex items-center mt-2">
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    name="anonymous"
                                    value="yes"
                                    required
                                    checked={formData.anonymous === "yes"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="anonymous"
                                    value="no"
                                    required
                                    checked={formData.anonymous === "no"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                No
                            </label>
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full mt-6 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
                    >
                        Create Account
                    </button>
                </form>

                {/* Sign In Link */}
                <p className="text-center mt-4 text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-purple-600 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
