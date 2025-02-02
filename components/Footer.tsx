import SmallLogo from "./SmallLogo";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12">
                    <div>
                        <div className="mb-6 text-xs"> <SmallLogo /></div>
                        <p className="text-gray-400">Building the future of technology in Ghana.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Web Development</li>
                            <li>Mobile Apps</li>
                            <li>Cloud Solutions</li>
                            <li>Consulting</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Academy</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Internships</li>
                            <li>School Programs</li>
                        </ul>
                    </div>

                </div>
                <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Sonnytech Academy Labs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}