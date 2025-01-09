import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Academy from '@/components/Academy';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import TechStack from '@/components/TechStack';
import Programs from '@/components/Programs';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Academy />
      <Programs />
      <Stats />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}