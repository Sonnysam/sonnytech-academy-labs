/* eslint-disable react/no-unescaped-entities */

export default function Contact() {
    return (
        <section className="py-32" id="contact">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Start Your Project</h2>
                    <p className="text-gray-400 mb-8">
                        Whether you need software development, consulting, or want to join our academy,
                        we're here to help you succeed.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                            Contact Us
                        </button>
                        <button className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                            View Programs
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}