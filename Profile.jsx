import React, { useState } from "react";
import { Pencil } from "lucide-react";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("stats");
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-gradient-to-r from-purple-300 to-cyan-200 p-6 rounded-2xl shadow-lg shadow-zinc-600">
                <div className="flex items-center space-x-4">
                    {/* <img
                        src="/avatar.jpg"
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                    /> */}

                    <div className="avator w-40 h-25 rounded-full border-4 border-white shadow-md flex justify-center items-center">
                        <h1 className="font-bold text-xl whitespace-nowrap">User Img</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Prince Charley</h1>
                        <p className="text-gray-700">📍 GLA University ,Mathura | 🎓 Computer Science</p>
                        <p className="text-sm text-gray-600 mt-2">
                            Computer science student passionate about AI and machine learning.
                            Research assistant in the NLP lab. Loves photography and volleyball.
                        </p>
                    </div>
                    <button className="ml-auto flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm hover:bg-gray-100">
                        <Pencil size={16} /> <span className="whitespace-nowrap">Edit Profile</span>
                    </button>
                </div>
                <div className="flex space-x-2 mt-4 items-center">
                        <h1 className="text-[1.2em] font-semibold">Hobbies :</h1>
                    <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs">AI Research</span>
                    <span className="bg-orange-200 text-orange-700 px-3 py-1 rounded-full text-xs">Photography</span>
                    <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs">Volleyball</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="flex space-x-4 border-b pb-2">
                    {[
                        { label: "Stats", value: "stats" },
                        { label: "Courses", value: "courses" },
                        { label: "Activity", value: "activity" },
                        { label: "Squad", value: "squad" }
                    ].map((tab) => (
                        <button
                            key={tab.value}
                            className={`px-4 py-2 rounded-lg ${activeTab === tab.value ? "bg-purple-500 text-white" : "text-gray-700"}`}
                            onClick={() => setActiveTab(tab.value)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {activeTab === "stats" && (
                    <div className="mt-4 p-4 border-[1.5px] rounded-lg shadow-lg  shadow-zinc-600">
                        <h2 className="text-lg font-semibold">Academic Overview</h2>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold">3.85</p>
                                <p className="text-sm text-gray-600">GPA</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold">72</p>
                                <p className="text-sm text-gray-600">Credits Completed</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold">7</p>
                                <p className="text-sm text-gray-600">Projects Completed</p>
                            </div>
                        </div>

                        <h2 className="text-lg font-semibold mt-6">Academic Progress</h2>
                        <p className="text-sm text-gray-600 mt-2">Degree Completion</p>
                        <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
                            <div className="h-full bg-purple-500" style={{ width: "60%" }}></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Semester Progress</p>
                        <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
                            <div className="h-full bg-purple-500" style={{ width: "75%" }}></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;