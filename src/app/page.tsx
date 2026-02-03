import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PortfolioCard from '@/components/PortfolioCard';
import { experiences } from '@/data/portfolio';

export default function Home() {
  return (
    <main className="min-h-screen bg-light text-dark font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-dark uppercase">
            Ebenezer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Happiness Ajayi
            </span>
          </h1>
          <h2 className="text-2xl text-secondary font-medium">
            Professional Assistant & Customer Relations Professional.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl border-l-4 border-secondary pl-4">
            Bridging the gap between high-level strategy and technical execution since 2019.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/portfolio" className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-secondary transition-colors">
              View My Work
            </Link>
            <Link href="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-md font-bold hover:bg-gray-50 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
        
        {/* About Image Section */}
        <div className="flex-1 relative w-full max-w-md aspect-square">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                {/* Placeholder image used here. Replace 'src' later with your Cloudinary link */}
                <Image 
                    src="https://res.cloudinary.com/dzneyqbo9/image/upload/v1770132583/ebenheadshot_hwknh2.jpg" 
                    alt="Ebenezer Happiness Ajayi"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            {/* Decorative box */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-secondary/10 rounded-2xl"></div>
        </div>
      </section>

      {/* Brief About Me */}
      <section className="bg-gray-50 px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold text-primary">About Me</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
            "A versatile partner to C-suite executives, specializing in Agile coordination, data-driven operations, and premium customer relations. I don't just manage schedules; I optimize business workflows."
            </p>
        </div>
      </section>

      {/* Portfolio Sneak Peek */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
            <h3 className="text-3xl font-bold text-dark">Featured Impact</h3>
            <Link href="/portfolio" className="text-primary font-bold hover:underline">View Full Portfolio →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            {/* Show only first 2 items */}
            {experiences.slice(0, 2).map((exp) => (
                <PortfolioCard key={exp.id} data={exp} />
            ))}
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        © 2026 EHA | Built for Excellence.
      </footer>
    </main>
  );
}