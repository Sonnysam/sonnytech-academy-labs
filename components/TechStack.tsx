export default function TechStack() {
    const technologies = [
        "React", "Next.js", "Node.js", "TypeScript", "Python", "AWS",
        "React Native", "Flutter", "MongoDB", "PostgreSQL", "Docker", "Kubernetes"
    ];

    return (
        <section className="py-20 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Technologies We Work With</h2>
                    <p className="text-gray-400">Modern tools for modern solutions</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
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
