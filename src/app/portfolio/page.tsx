import Navbar from '@/components/Navbar';
import PortfolioCard from '@/components/PortfolioCard';
import { experiences, skills } from '@/data/portfolio';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <div className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-dark">My Experience</h1>
        <p className="text-gray-600 mb-12">A track record of operational excellence across Fashion, Technology, and Retail Service industries.</p>
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-16">
            {skills.map(skill => (
                <span key={skill} className="bg-gray-100 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                    {skill}
                </span>
            ))}
        </div>

        <div className="space-y-6">
            {experiences.map((exp) => (
                <PortfolioCard key={exp.id} data={exp} />
            ))}
        </div>
      </div>
    </div>
  );
}
