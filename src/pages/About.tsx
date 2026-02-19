import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heart, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="text-center space-y-6">
          <h1 className="text-5xl font-black text-slate-800 tracking-tight">Our <span className="text-primary italic">Mission</span></h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            We are dedicated to humanizing the healthcare experience through 
            innovative technology and compassionate care delivery.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Heart, label: "Compassion", text: "Putting patients first in everything we build." },
            { icon: Target, label: "Precision", text: "Accurate tracking and efficient hospital management." },
            { icon: Award, label: "Excellence", text: "Maintaining the highest standards in health-tech." }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4 p-8 bg-white border border-slate-200 rounded-3xl">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">{item.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white overflow-hidden relative">
          <div className="relative z-10 space-y-6 max-w-lg">
            <h2 className="text-3xl font-black italic">Building the Future of Patient Care</h2>
            <p className="text-slate-400 font-medium leading-relaxed">
              HospitalSync was founded on the belief that technology should 
              remove barriers, not create them. Our system is used by over 500 
              clinics nationwide to streamline their daily operations.
            </p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-black hover:bg-primary hover:text-white transition-all">
              Learn More
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 blur-sm pointer-events-none">
            <Heart size={300} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
