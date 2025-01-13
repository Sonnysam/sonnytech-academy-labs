"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Prevent scrolling when mobile menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { href: "#services", label: "Services" },
        // { href: "#work", label: "Work" },
        { href: "#academy", label: "Academy" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}>
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="flex items-center justify-between">
                        <Logo />

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/70 hover:text-white transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:block">
                            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation Overlay */}
                    {isOpen && (
                        <div className="fixed inset-0 top-[72px] bg-black/80 backdrop-blur-md z-40 md:hidden">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-col gap-4 pt-4">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="text-white/70 hover:text-white transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/10"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200 mt-2"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            {/* Overlay backdrop for mobile menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}