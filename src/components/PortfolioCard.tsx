'use client';
import { useState } from 'react';
import { experiences } from '@/data/portfolio';

export default function PortfolioCard({ data }: { data: typeof experiences[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all cursor-pointer bg-white group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
            {data.company}
          </h3>
          <p className="text-secondary font-medium">{data.role}</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">{data.period}</span>
      </div>

      <p className="text-gray-600 text-sm mb-4">{data.focus}</p>

      {/* Accordion Reveal */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-4 border-t border-gray-100 space-y-3 text-sm">
          <div>
            <span className="font-bold text-primary block">Impact:</span>
            <span className="text-gray-700">{data.impact}</span>
          </div>
          <div>
            <span className="font-bold text-primary block">Key Achievement:</span>
            <span className="text-gray-700">{data.achievement}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-xs font-semibold text-secondary uppercase tracking-wider flex items-center gap-1">
        {isOpen ? 'Close Details' : 'Click to Reveal Details'} 
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </div>
    </div>
  );
}