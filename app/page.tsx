import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HomePage from './HomePage';


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  );
}