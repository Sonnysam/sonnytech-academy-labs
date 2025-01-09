"use client";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">Sonnytech</div>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#services" className="hover:text-gray-300">Services</a>
                        <a href="#work" className="hover:text-gray-300">Work</a>
                        <a href="#academy" className="hover:text-gray-300">Academy</a>
                        <a href="#contact" className="hover:text-gray-300">Contact</a>
                    </div>
                    <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
