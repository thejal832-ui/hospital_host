import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hospital, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Doctors', path: '/doctors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm z-50">
      <div className="px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary rounded-xl text-white group-hover:scale-110 transition-transform">
            <Hospital size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">Hospital<span className="text-primary italic">Sync</span></span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-slate-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-95">
            Create Account
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `p-3 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button className="w-full bg-primary text-white py-3 rounded-xl font-bold mt-2 shadow-lg shadow-primary/20">
            Create Account
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
