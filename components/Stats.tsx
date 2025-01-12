/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Users, Globe, Laptop, Award } from 'lucide-react';

const stats = [
    {
        icon: <Globe className="w-6 h-6" />,
        number: "15+",
        label: "Countries",
        sublabel: "Global Reach",
        growth: "+40% from 2023"
    },
    {
        icon: <Users className="w-6 h-6" />,
        number: "2000+",
        label: "Students",
        sublabel: "Trained & Mentored",
        growth: "+125% from 2023"
    },
    {
        icon: <Laptop className="w-6 h-6" />,
        number: "200+",
        label: "Projects",
        sublabel: "Successfully Delivered",
        growth: "+85% from 2023"
    },
    {
        icon: <Award className="w-6 h-6" />,
        number: "95%",
        label: "Success Rate",
        sublabel: "Career Placement",
        growth: "+15% from 2023"
    }
];

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('stats-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <section className="py-32 relative overflow-hidden" id="stats-section">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_70%)]" />

            <div className="container mx-auto px-4 sm:px-6 relative">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            {/* Card */}
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden">
                                {/* Top section with icon */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                                        {React.cloneElement(stat.icon, {
                                            className: "w-6 h-6 text-indigo-400"
                                        })}
                                    </div>
                                    <div className="text-xs text-green-400 flex items-center gap-1">
                                        <ArrowUpRight className="w-4 h-4" />
                                        {stat.growth}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}>
                                    {stat.number}
                                </div>
                                <div className="text-lg font-medium mb-1">{stat.label}</div>
                                <div className="text-sm text-gray-400">{stat.sublabel}</div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {/* Optional Bottom Banner */}
                <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 text-center">
                    <p className="text-lg text-gray-300">
                        Transforming Africa's tech landscape, one success story at a time.
                    </p>
                </div>
            </div>
        </section>
    );
}