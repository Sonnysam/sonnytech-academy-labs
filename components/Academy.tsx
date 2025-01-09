import React from 'react'

const Academy = () => {
    return (
        <section className="py-32 relative" id="academy">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_70%)]" />
            <div className="container mx-auto px-6 relative">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">Our Academy</h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Empowering the next generation of tech innovators in Ghana through hands-on training, mentorship, and real-world projects.
                        </p>
                        <div className="space-y-6">
                            <div className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <h3 className="text-2xl font-bold mb-4">Tech Internship Program</h3>
                                <p className="text-gray-400 mb-4">
                                    A comprehensive 3-6 month program covering modern web and mobile development technologies.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span>Hands-on project experience</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span>1:1 Industry mentorship</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span>Career development support</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <h3 className="text-2xl font-bold mb-4">High School Program</h3>
                                <p className="text-gray-400 mb-4">
                                    Introducing young minds to the world of technology through interactive workshops.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span>Basic coding fundamentals</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span>Tech career guidance</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span>Practical projects</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="relative h-full">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl" />
                            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full">
                                <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                                    Now Accepting Applications
                                </div>
                                <h3 className="text-3xl font-bold mb-6">Join Our Next Cohort</h3>
                                <p className="text-gray-400 mb-8">
                                    Take the first step towards your tech career. Our programs are designed to give you the skills and experience needed to succeed in the industry.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            95%
                                        </div>
                                        <span>Employment rate after graduation</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            200+
                                        </div>
                                        <span>Students trained to date</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            50+
                                        </div>
                                        <span>Partner companies</span>
                                    </div>
                                </div>
                                <button className="mt-8 w-full bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Academy