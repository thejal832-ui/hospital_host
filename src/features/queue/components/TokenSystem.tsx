import React, { useState } from 'react';
import { UserPlus, UserCheck, Users, Ticket, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Patient {
  id: string;
  name: string;
  token: number;
  timestamp: Date;
}

const TokenSystem: React.FC = () => {
  const [queue, setQueue] = useState<Patient[]>([]);
  const [name, setName] = useState('');
  const [tokenCounter, setTokenCounter] = useState(1);
  const [activePatient, setActivePatient] = useState<Patient | null>(null);

  const addPatient = () => {
    if (!name.trim()) return;

    const newPatient: Patient = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      token: tokenCounter,
      timestamp: new Date(),
    };

    setQueue([...queue, newPatient]);
    setTokenCounter(tokenCounter + 1);
    setName('');
  };

  const nextPatient = () => {
    if (queue.length === 0) {
      alert("No patients in queue");
      return;
    }

    const [next, ...remaining] = queue;
    setActivePatient(next);
    setQueue(remaining);
  };

  const removePatient = (id: string) => {
    setQueue(queue.filter(p => p.id !== id));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Registration Section */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <UserPlus size={24} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">New Registration</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-500 mb-2 ml-1">Patient Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                onKeyPress={(e) => e.key === 'Enter' && addPatient()}
              />
            </div>
            <button
              onClick={addPatient}
              className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group shadow-lg shadow-primary/20 active:scale-[0.98]"
            >
              <span>Generate Token</span>
              <Ticket size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

        {/* Current Status */}
        {activePatient && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary p-8 rounded-3xl text-white shadow-xl shadow-primary/40 relative overflow-hidden"
          >
            <div className="relative z-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 mb-2 block">Now Calling</span>
              <h3 className="text-3xl font-black mb-1">{activePatient.name}</h3>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold mt-2">
                <Ticket size={16} />
                <span>Token #{activePatient.token}</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10">
              <UserCheck size={160} />
            </div>
          </motion.div>
        )}

        <button
          onClick={nextPatient}
          className="w-full py-4 rounded-2xl border-2 border-slate-200 font-bold text-slate-600 hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
        >
          <UserCheck size={20} />
          <span>Call Next Patient</span>
        </button>
      </div>

      {/* Queue List Section */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                <Users size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 tracking-tight">Waiting List</h2>
                <p className="text-sm font-medium text-slate-400 leading-none mt-1">
                  {queue.length} patients in queue
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {queue.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                    <Users size={32} />
                  </div>
                  <p className="text-slate-400 font-medium italic">Queue is currently empty</p>
                </motion.div>
              ) : (
                queue.map((patient) => (
                  <motion.div
                    key={patient.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="group p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between hover:border-primary/30 transition-all hover:bg-white hover:shadow-lg hover:shadow-slate-100/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl font-black text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                        {patient.token}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-700">{patient.name}</h4>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Waiting since {patient.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => removePatient(patient.id)}
                      className="p-2.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSystem;
