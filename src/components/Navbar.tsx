import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-white border-b border-gray-100 sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold tracking-tighter text-primary">
        EHA.
      </Link>
      <div className="space-x-8 text-sm font-medium">
        <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
        <Link href="/portfolio" className="hover:text-secondary transition-colors">Work</Link>
        <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
      </div>
    </nav>
  );
}