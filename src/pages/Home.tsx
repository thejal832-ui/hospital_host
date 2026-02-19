import React from 'react';
import MainLayout from '../layouts/MainLayout';
import TokenSystem from '../features/queue/components/TokenSystem';
import { ShieldCheck, Clock, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
            <Zap size={14} fill="currentColor" />
            <span>Smart Token Management v2.0</span>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-slate-800 leading-[1.1] tracking-tight">
              Efficient Healthcare <br /> 
              <span className="text-primary italic">Simplified.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
              Transform your patient flow with our intelligent queue management system. 
              Reduce wait times and improve satisfaction.
            </p>
          </div>
        </section>

        {/* Token System Widget */}
        <section className="relative">
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10 animate-pulse" />
          <TokenSystem />
        </section>

        {/* Features Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {[
            { icon: ShieldCheck, title: "Secure Data", desc: "Reliable patient information management with HIPAA compliance in mind." },
            { icon: Clock, title: "Real-time Tracking", desc: "Live updates for patients and staff to minimize perceived wait times." },
            { icon: Users, title: "Scalable Logic", desc: "Optimized for high-traffic hospital environments and multiple departments." }
          ].map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-xl hover:shadow-slate-200/50 transition-all border-b-4 border-b-primary/10"
            >
              <div className="w-14 h-14 bg-healing-blue flex items-center justify-center rounded-2xl text-primary mb-6">
                <f.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;