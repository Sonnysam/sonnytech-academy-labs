import React from 'react';
import { GraduationCap, Users, Building2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

const Academy = () => {
    return (
        <section className="py-32 relative" id="academy">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />

            <div className="container mx-auto px-4 sm:px-6 relative">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6">
                            <BookOpen className="w-4 h-4 text-indigo-400" />
                            <span>Education</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Tech Academy
                        </h2>

                        <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                            Empowering the next generation of tech innovators in Ghana through hands-on training, mentorship, and real-world projects.
                        </p>

                        {/* Programs */}
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Tech Internship Program",
                                    description: "3-6 month immersive program in modern web and mobile development",
                                    features: ["Hands-on projects", "1:1 Mentorship", "Career support"],
                                    icon: <GraduationCap className="w-6 h-6 text-indigo-400" />
                                },
                                {
                                    title: "High School Program",
                                    description: "Introduction to coding and tech careers for young minds",
                                    features: ["Coding basics", "Career guidance", "Build projects"],
                                    icon: <Sparkles className="w-6 h-6 text-indigo-400" />
                                }
                            ].map((program, index) => (
                                <div key={index}
                                    className="group p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 bg-white/5 hover:bg-white/10"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-white/10">
                                            {program.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                                                {program.title}
                                            </h3>
                                            <p className="text-gray-400 mb-4">
                                                {program.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {program.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/2">
                        <div className="sticky top-32">
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                                <div className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full text-sm mb-6 text-indigo-400">
                                    <span>Now Accepting Applications</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>

                                <h3 className="text-3xl font-bold mb-6">Join Our Next Cohort</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Take the first step towards your tech career. Our programs are designed to give you the skills and experience needed to succeed in the industry.
                                </p>

                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {[
                                        { icon: <GraduationCap />, value: "95%", label: "Employment rate" },
                                        { icon: <Users />, value: "200+", label: "Students trained" },
                                        { icon: <Building2 />, value: "50+", label: "Partner companies" }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center p-4 rounded-xl bg-white/5">
                                            <div className="text-2xl font-bold mb-1 text-white">{stat.value}</div>
                                            <div className="text-xs text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2">
                                    Apply Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academy;