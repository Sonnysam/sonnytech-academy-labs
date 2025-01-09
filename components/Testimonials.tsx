export default function Testimonials() {
    const testimonials = [
        {
            quote: "The internship program completely transformed my career path. The hands-on experience and mentorship were invaluable.",
            author: "David K.",
            role: "Former Intern, Now Software Engineer at Microsoft"
        },
        {
            quote: "Sonnytech's corporate training helped our team transition to modern development practices smoothly.",
            author: "Sarah M.",
            role: "CTO, FinTech Startup"
        },
        {
            quote: "The high school program opened my eyes to the possibilities in tech. Now I'm pursuing Computer Science.",
            author: "Michelle A.",
            role: "University Student"
        }
    ];

    return (
        <section className="py-32 bg-white/5">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <blockquote className="text-lg mb-6 text-gray-300">
                                "{testimonial.quote}"
                            </blockquote>
                            <div>
                                <div className="font-medium">{testimonial.author}</div>
                                <div className="text-sm text-gray-400">{testimonial.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}