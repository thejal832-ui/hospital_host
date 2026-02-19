import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-black text-slate-800 tracking-tight">Get in <span className="text-primary">Touch</span></h1>
          <p className="text-slate-500 font-medium">We're here to help you and your family.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-800">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Emergency", value: "+1 (555) 000-911" },
                { icon: Mail, title: "Email Info", value: "hello@hospitalsync.com" },
                { icon: MapPin, title: "Location", value: "123 Medical Drive, Health City" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-400 text-xs uppercase tracking-widest">{item.title}</h4>
                    <p className="text-lg font-bold text-slate-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 space-y-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Send Message</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
              <textarea placeholder="How can we help?" rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
