import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Stethoscope, Calendar, Star } from 'lucide-react';

const AllDoctors: React.FC = () => {
  const doctors = [
    { name: "Dr. Sarah Johnson", specialty: "Cardiologist", experience: "12 Years", rating: 4.9, available: "Mon - Fri" },
    { name: "Dr. Michael Chen", specialty: "Neurologist", experience: "8 Years", rating: 4.7, available: "Tue - Sat" },
    { name: "Dr. Emily Davis", specialty: "Pediatrician", experience: "15 Years", rating: 4.9, available: "Mon - Wed" },
    { name: "Dr. Robert Smith", specialty: "Dermatologist", experience: "10 Years", rating: 4.6, available: "Thu - Sun" },
  ];

  return (
    <MainLayout>
      <div className="space-y-12">
        <header className="space-y-2">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Meet Our <span className="text-primary italic">Specialists</span></h1>
          <p className="text-slate-500 font-medium">World-class healthcare professionals at your service.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <div key={i} className="group bg-white p-6 rounded-3xl border border-slate-200 hover:shadow-2xl hover:shadow-slate-200/60 transition-all cursor-pointer">
              <div className="w-full aspect-square bg-slate-100 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center text-slate-300">
                <Stethoscope size={64} />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Online
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 line-clamp-1">{doc.name}</h3>
                  <p className="text-primary text-sm font-bold uppercase tracking-wider">{doc.specialty}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <div className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-xl text-slate-500">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span>{doc.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-xl text-slate-500">
                    <Calendar size={14} />
                    <span>{doc.available}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-slate-900 group-hover:bg-primary text-white rounded-xl font-bold transition-colors">
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default AllDoctors;
