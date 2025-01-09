import { programs } from "@/data";
import { ArrowRight } from "lucide-react";

export default function Programs() {


    return (
        <section className="py-32 bg-black" id="programs">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-20">
                    <h2 className="text-4xl font-bold mb-6">Educational Programs</h2>
                    <p className="text-gray-400">
                        Our comprehensive programs are designed to bridge the gap between academic knowledge
                        and industry requirements, creating the next generation of tech leaders in Africa.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 bg-white/10 px-3 py-1 rounded-full text-sm">
                                {program.tag}
                            </div>

                            <h3 className="text-xl font-semibold mb-2 mt-8">{program.title}</h3>
                            <div className="text-sm text-gray-400 mb-4">{program.duration}</div>
                            <p className="text-gray-300 mb-6">{program.description}</p>

                            <ul className="space-y-3 mb-8">
                                {program.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="text-sm flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                                Learn More <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}