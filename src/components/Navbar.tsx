import { Menu, X, Code2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold">P &gt; p</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-emerald-800 px-3 py-2 rounded-md">Home</Link>
              <Link to="/blog" className="hover:bg-emerald-800 px-3 py-2 rounded-md">Blog</Link>
              <Link to="/approach" className="hover:bg-emerald-800 px-3 py-2 rounded-md">Our Approach</Link>
              <a href="#work" className="hover:bg-emerald-800 px-3 py-2 rounded-md">Projects</a>
              <Link to="/contact" className="hover:bg-emerald-800 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-emerald-800 px-3 py-2 rounded-md">Home</Link>
            <Link to="/blog" className="block hover:bg-emerald-800 px-3 py-2 rounded-md">Blog</Link>
            <Link to="/approach" className="block hover:bg-emerald-800 px-3 py-2 rounded-md">Our Approach</Link>
            <a href="#work" className="block hover:bg-emerald-800 px-3 py-2 rounded-md">Projects</a>
            <Link to="/contact" className="block hover:bg-emerald-800 px-3 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}