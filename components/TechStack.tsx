import React from 'react';
import { Code, Cloud, Database, Phone, Server } from 'lucide-react';

export default function TechStack() {
    const techCategories = [
        {
            title: "Frontend",
            icon: <Code className="w-5 h-5 mb-2" />,
            technologies: [
                "React", "Next.js", "TypeScript", "TailwindCSS",
                "shadcn/ui", "Redux Toolkit", "React Query"
            ]
        },
        {
            title: "Backend",
            icon: <Cloud className="w-5 h-5 mb-2" />,
            technologies: [
                "Node.js", "Python", "Go", "Express",
                "FastAPI", "GraphQL", "tRPC"
            ]
        },
        {
            title: "Database & Storage",
            icon: <Database className="w-5 h-5 mb-2" />,
            technologies: [
                "PostgreSQL", "MongoDB", "Redis", "Prisma",
                "Amazon S3", "Supabase"
            ]
        },
        {
            title: "Mobile & Cross-platform",
            icon: <Phone className="w-5 h-5 mb-2" />,
            technologies: [
                "React Native", "Flutter", "Expo",
                "Progressive Web Apps", "Electron"
            ]
        },
        {
            title: "DevOps & Infrastructure",
            icon: <Server className="w-5 h-5 mb-2" />,
            technologies: [
                "Docker", "Kubernetes", "AWS", "Vercel",
                "GitHub Actions", "Terraform"
            ]
        }
    ];

    return (
        <section className="py-24 border-t border-white/10 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Our Technology Stack
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Cutting-edge tools and frameworks powering our solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="p-6 rounded-xl bg-white/5 hover:bg-white/[0.07] transition-all duration-300 border border-white/10 backdrop-blur-sm"
                        >
                            <div className="text-center mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 mb-3">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 text-sm rounded-full bg-white/[0.06] hover:bg-white/[0.1] transition-colors duration-200 cursor-pointer"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}