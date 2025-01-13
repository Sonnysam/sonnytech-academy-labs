/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
    const contactMethods = [
        {
            title: "Email",
            info: "sonnytechacademy.labs@gmail.com",
        },
        {
            title: "Phone",
            info: "+233 59 460 2088",
            subInfo: "Mon-Fri, 8am - 5pm",
        },
    ];

    return (
        <section className="py-32" id="contact">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="space-y-20">
                    {/* Header Section */}
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold">
                            Let's Build Together
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            From custom software development to technical consulting,
                            we're here to bring your vision to life.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-12 backdrop-blur-sm">
                        <div className="grid md:grid-cols-2 gap-12">
                            {contactMethods.map((method, index) => (
                                <div
                                    key={index}
                                    className="space-y-2 p-6 rounded-xl hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                                        {method.title}
                                    </div>
                                    <div className="font-medium text-lg break-all">
                                        {method.info}
                                    </div>
                                    {method.subInfo && (
                                        <div className="text-sm text-gray-400">
                                            {method.subInfo}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-12 pt-12 border-t border-white/[0.05] text-center">
                            <button className="bg-white text-black px-8 py-3 rounded-lg font-medium 
                                            hover:bg-gray-100 transition-colors">
                                Get in Touch
                            </button>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="text-center text-sm text-gray-400">
                        Based in Accra, Ghana · Available Worldwide
                    </div>
                </div>
            </div>
        </section>
    );
}