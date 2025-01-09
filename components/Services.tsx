import { Monitor, DevicePhone, Cloud, Database } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Monitor className="w-8 h-8" />,
            title: "Web Development",
            description: "Modern, responsive web applications built with Next.js and React"
        },
        {
            icon: <DevicePhone className="w-8 h-8" />,
            title: "Mobile Development",
            description: "Native and cross-platform mobile apps for iOS and Android"
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and DevOps automation"
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Tech Consulting",
            description: "Strategic technology guidance and digital transformation"
        }
    ];

    return (
        <section className="py-32" id="services">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
                        <p className="text-gray-400 mb-8">End-to-end solutions for businesses looking to thrive in the digital age.</p>
                        <button className="flex items-center gap-2 text-white hover:gap-4 transition-all">
                            View All Services <ArrowRight size={20} />
                        </button>
                    </div>
                    <div className="md:w-2/3 grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}