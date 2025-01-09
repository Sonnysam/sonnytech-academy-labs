import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <header className="min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_70%)]" />
            <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl">
                    <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6">
                        Innovating for Tomorrow
                    </div>
                    <h1 className="text-6xl font-bold mb-6 leading-tight">
                        We Build Digital Solutions <br />That Define the Future
                    </h1>
                    <p className="text-xl mb-8 text-gray-400">
                        Software development, tech consulting, and empowering the next generation of innovators in Ghana.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                            Start Project <ArrowRight size={20} />
                        </button>
                        <button className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                            Join Academy
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}