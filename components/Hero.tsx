/* eslint-disable react/no-unescaped-entities */

"use client";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <header className="min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_70%)]" />
            <div
                className={`container mx-auto px-6 relative transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
            >
                <div className="max-w-4xl">
                    <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6 animate-pulse">
                        Applications Open for 2025 Internship Program
                    </div>
                    <h1 className="text-7xl font-bold mb-8 leading-tight">
                        Shaping the Future of
                        <span className="bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text"> Tech in Africa</span>
                    </h1>
                    <p className="text-xl mb-8 text-gray-400 max-w-2xl">
                        At Sonnytech, we combine cutting-edge software development with transformative education to build tomorrow's tech leaders.
                    </p>
                    <div className="flex gap-4">
                        <button className="group bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                            Explore Services
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                        <button className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                            Join Our Programs
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown size={24} />
            </div>
        </header>
    );
}