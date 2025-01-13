/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { stats } from '@/data';

export default function Stats() {


    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5" />
            <div className="container mx-auto px-6 relative">
                <div className="grid md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group hover:bg-white/5 p-8 rounded-2xl transition-colors"
                        >
                            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                {stat.number}
                            </div>
                            <div className="text-lg font-medium mb-1">{stat.label}</div>
                            <div className="text-sm text-gray-400">{stat.sublabel}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
