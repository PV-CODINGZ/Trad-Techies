import React from "react";
import { Mail, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <User size={28} className="text-purple-600 group-hover:text-black" />,
        title: "College Email Authentication",
        description: "Exclusive access for GLA students using your college email ID.",
    },
    {
        icon: <Mail size={28} className="text-purple-600 group-hover:text-black" />,
        title: "Anonymous Posting",
        description: "Choose to post anonymously or with your identity for each interaction.",
    },
    {
        icon: <MessageSquare size={28} className="text-purple-600 group-hover:text-black" />,
        title: "Campus Discussions",
        description: "Engage in discussions about campus events, academics, and student life.",
    },
];

const Features = ({ theme }) => {
    return (
        <section
            className={`py-16 px-6 md:px-16 mt-10 text-center transition-all ${
                theme === "light" ? "bg-black text-white" : "bg-white text-black cursor-pointer"
            }`}
        >
            <motion.h2  
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-3xl font-bold"
                  viewport={{ once: true, amount: 0.2 }}
            >Features for GLA Students</motion.h2>

            {/* Features Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className={`group p-6 border rounded-lg shadow-md transition-all duration-300 ${
                            theme === "light"
                                ? "border-gray-700 bg-black hover:bg-purple-600 hover:text-black"
                                : "border-gray-300 bg-white hover:bg-purple-600 hover:text-white"
                        }`}
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="flex justify-center">{feature.icon}</div>
                        <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
                        <p
                            className={`mt-2 group-hover:text-gray-800 ${
                                theme === "light" ? "text-gray-400" : "text-gray-500"
                            }`}
                        >
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
