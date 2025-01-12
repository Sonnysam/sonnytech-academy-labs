export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12">
                    <div>
                        <div className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Sonnytech Labs
                        </div>
                        <p className="text-gray-400">Building the future of technology in Ghana.</p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Web Development</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Mobile Apps</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Cloud Solutions</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Consulting</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Academy</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Internships</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">School Programs</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>hello@sonnytech.com</li>
                            <li>Accra, Ghana</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Sonnytech Labs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}