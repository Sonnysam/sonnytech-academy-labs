/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles, Globe } from 'lucide-react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <header className="min-h-screen flex items-center relative overflow-hidden bg-black">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-xy" />

            {/* Grain effect overlay */}
            <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')]" />

            {/* Main content */}
            <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="max-w-4xl">
                    {/* Announcement banner */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6 hover:bg-white/20 transition-colors cursor-pointer group">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span>Applications Open for 2025 Internship Program</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Main heading */}
                    <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                        Shaping the Future of
                        <div className="inline-flex flex-col h-[84px] overflow-hidden">
                            <span className="ml-4 animate-slide-up bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"> Tech in Africa</span>
                        </div>
                    </h1>

                    {/* Description */}
                    <p className="text-xl mb-12 text-gray-400 max-w-2xl leading-relaxed">
                        At Sonnytech Labs, we combine cutting-edge software development with transformative education to build tomorrow's tech leaders.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25">
                            Explore Services
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                        <button className="relative overflow-hidden group px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2">
                            <div className="absolute inset-0 border border-white/20 rounded-full group-hover:scale-95 transition-transform"></div>
                            <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Globe className="w-5 h-5" />
                            Join Our Programs
                        </button>
                    </div>

                    {/* Stats section */}
                    <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8">
                        {[
                            { label: 'Projects Delivered', value: '200+' },
                            { label: 'Students Trained', value: '1000+' },
                            { label: 'Countries Reached', value: '15+' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
                <span className="text-sm">Scroll to explore</span>
                <ChevronDown size={24} className="animate-bounce" />
            </div>
        </header>
    );
}