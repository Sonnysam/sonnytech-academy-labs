export default function TechStack() {
    const technologies = [
        "React", "Next.js", "Node.js", "TypeScript", "Python", "AWS", "Firebase",
        "React Native", "Flutter", "MongoDB", "PostgreSQL", "Docker", "Kubernetes"
    ];
    return (
        <section className="py-20 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Our Technology Stack
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Cutting-edge tools and frameworks powering our solutions
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}