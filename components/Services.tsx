import React from 'react';
import { Code, Cloud, Sparkles, Shapes, BookOpen, LineChart, Workflow, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <Code className="w-10 h-10" />,
        title: "Custom Software Development",
        description: "Enterprise-grade applications built with modern tech stacks including React, Node.js, and Cloud-native solutions.",
        tags: ["Web Apps", "Mobile", "API", "Cloud"]
    },
    {
        icon: <Cloud className="w-10 h-10" />,
        title: "Cloud Architecture & DevOps",
        description: "Scalable cloud infrastructure with AWS/Azure, CI/CD pipelines, and containerization using Docker & Kubernetes.",
        tags: ["AWS", "Azure", "DevOps", "Docker"]
    },
    {
        icon: <Sparkles className="w-10 h-10" />,
        title: "AI & Machine Learning",
        description: "Intelligent solutions leveraging computer vision, NLP, and predictive analytics for business automation.",
        tags: ["ML", "NLP", "Analytics", "AI"]
    },
    {
        icon: <Shapes className="w-10 h-10" />,
        title: "Blockchain Development",
        description: "Web3 solutions including smart contracts, DeFi applications, and enterprise blockchain implementations.",
        tags: ["Web3", "DeFi", "Smart Contracts"]
    },
    {
        icon: <BookOpen className="w-10 h-10" />,
        title: "Tech Education",
        description: "Comprehensive training programs in software development, cloud computing, and emerging technologies.",
        tags: ["Training", "Workshops", "Mentorship"]
    },
    {
        icon: <LineChart className="w-10 h-10" />,
        title: "Digital Strategy",
        description: "Technology consulting and digital transformation roadmaps for businesses entering the tech space.",
        tags: ["Consulting", "Strategy", "Innovation"]
    }
];

export default function Services() {
    return (
        <section className="py-32 relative" id="services">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_70%)]" />

            <div className="container mx-auto px-4 sm:px-6 relative">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Column */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6">
                                <Workflow className="w-4 h-4" />
                                <span>Our Solutions</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Cutting-edge Services for the Digital Age
                            </h2>

                            <p className="text-gray-400 mb-8 text-lg">
                                End-to-end technology solutions that help African businesses scale globally through innovation and digital transformation.
                            </p>

                            <button className="group flex items-center gap-2 text-white hover:gap-4 transition-all bg-white/10 px-6 py-3 rounded-full hover:bg-white/20">
                                View All Services
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Services Grid */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 relative overflow-hidden"
                            >
                                {/* Service Icon with gradient background */}
                                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 inline-block">
                                    {React.cloneElement(service.icon, {
                                        className: "w-8 h-8 text-indigo-400"
                                    })}
                                </div>

                                {/* Title and Description */}
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    {service.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover gradient effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}