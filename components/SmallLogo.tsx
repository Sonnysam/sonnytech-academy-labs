import React from 'react';
import { Dot } from 'lucide-react';

const SmallLogo = () => {
    return (
        <div className="group relative">
            <div className="text-xl font-bold tracking-tighter flex items-center">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer">
                    Sonnytech
                </span>
                <span className="text-white/30">
                    <Dot className="w-4 h-4 animate-pulse" />
                </span>
                <span className="relative">
                    <span className="text-white/90 transition-all duration-300 group-hover:text-white">
                        labs
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
        </div>
    );
};

export default SmallLogo;