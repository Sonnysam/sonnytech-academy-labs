/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function Contact() {
    const contactMethods = [
        {
            title: "Email",
            description: "Get in touch via email",
            info: "sonnytechacademy.labs@gmail.com",
        },
        {
            title: "Phone",
            description: "Mon-Fri from 8am to 5pm",
            info: "+233 59 460 2088",
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-black to-gray-900" id="contact">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Let's Build Something Amazing Together
                    </h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Whether you need custom software development, technical consulting, or want to join our academy,
                        we're here to turn your vision into reality.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-white/5 hover:bg-white/[0.07] border border-white/10 transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                                <p className="text-lg font-medium">{method.info}</p>
                            </div>
                        ))}
                    </div>
                    {/* 
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="text-left">
                                <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                                <p className="text-gray-400">
                                    Schedule a free consultation with our experts
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                                    Book a Call
                                </button>
                                <button className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                                    View Programs
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}