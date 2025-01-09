import { services } from '@/data';
import { Monitor, ArrowRight } from 'lucide-react';

export default function Services() {
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