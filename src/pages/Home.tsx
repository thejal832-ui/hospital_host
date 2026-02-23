// import { useState } from 'react';

// interface Patient {
//   name: string;
//   token: number;
// }

// const Home: React.FC = () => {
//   const [name, setName] = useState('');
//   const [queue, setQueue] = useState<Patient[]>([]);
//   const [tokenCounter, setTokenCounter] = useState(1);
//   const [currentPatient, setCurrentPatient] = useState<Patient | null>(null);

//   const registerPatient = () => {
//     if (!name.trim()) {
//       alert("Please enter a patient name");
//       return;
//     }
//     const newPatient = { name: name, token: tokenCounter };
//     setQueue([...queue, newPatient]);
//     setTokenCounter(tokenCounter + 1);
//     setName('');
//   };

//   const callNextPatient = () => {
//     if (queue.length === 0) {
//       alert("No patients in queue");
//       return;
//     }
//     const next = queue[0];
//     setCurrentPatient(next);
//     setQueue(queue.slice(1));
//   };

//   return (
//     <div className="relative">
//       {/* Hero Section */}
//       <div className="relative h-[280px] w-full overflow-hidden bg-[#b9e2e1]">
//         <img 
//           src="https://images.unsplash.com/photo-1505751172107-1605751172107?q=80&w=2070&auto=format&fit=crop" 
//           alt="Healthcare background" 
//           className="absolute inset-0 w-full h-full object-cover opacity-60"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-end pr-24 text-right">
//           <h1 className="text-4xl font-bold text-slate-800 mb-2">Hospital Token Management System</h1>
//           <p className="text-sm text-slate-600 mb-6 italic">Fast • Simple • Digital Queue System</p>
//           <button className="bg-[#5b6cff] text-white px-12 py-3 rounded-lg text-sm font-bold shadow-lg hover:bg-blue-600 transition-all">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Main Content Overlap */}
//       <div className="max-w-6xl mx-auto px-10 -mt-16 relative z-10 flex gap-8">
//         {/* Token Box */}
//         <div className="w-[380px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
//           <div className="p-6 space-y-4">
//             <h2 className="text-[#8B4513] text-sm font-bold">Hospital Token System</h2>
            
//             <input 
//               type="text" 
//               placeholder="Patient Name" 
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full bg-[#1a1a1a]/10 border-none p-4 text-xs font-semibold placeholder:text-slate-500 rounded focus:ring-1 focus:ring-slate-400 outline-none"
//             />

//             <button 
//               onClick={registerPatient}
//               className="w-full bg-[#1a1a1a] text-white py-3 rounded font-bold text-sm tracking-wide hover:bg-black transition-all"
//             >
//               Register
//             </button>

//             <button 
//               onClick={callNextPatient}
//               className="w-full bg-[#1a1a1a] text-white py-3 rounded font-bold text-sm tracking-wide hover:bg-black transition-all"
//             >
//               Next Patient
//             </button>

//             <div className="pt-4">
//               <h3 className="text-[#8B4513] text-sm font-bold mb-4">Waiting List:</h3>
//               <div className="space-y-2 max-h-[150px] overflow-auto pr-2">
//                 {queue.map((p, i) => (
//                   <div key={i} className="text-xs font-bold text-slate-600 border-l-2 border-slate-300 pl-3 py-1">
//                     Token {p.token} - {p.name}
//                   </div>
//                 ))}
//                 {queue.length === 0 && <p className="text-[10px] italic text-slate-400">Queue is empty</p>}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Current Info (Optional but helpful) */}
//         {currentPatient && (
//           <div className="flex-1 pt-20">
//             <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/50 inline-block">
//               <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-1 block">Currently Consulting</span>
//               <h3 className="text-4xl font-black text-slate-800 tracking-tighter">
//                 {currentPatient.name}
//               </h3>
//               <div className="mt-2 inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full">
//                 Token #{currentPatient.token}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;




// import "./Home.css";

// export default function Home() {
//   return (
//     <div className="app">

//       {/* Navbar */}
//       <nav className="navbar">
//         <h2 className="logo">HospitalSync</h2>
//         <div className="nav-links">
//           <a href="#">Home</a>
//           <a href="#">All Doctors</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-text">
//           <h1>Hospital Token Management System</h1>
//           <p>Fast • Simple • Digital Queue System</p>
//           <button>Get Started</button>
//         </div>
//         <div className="hero-image">
//           <img src="/hospital.jpg" alt="Healthcare" />
//         </div>
//       </section>

//       {/* Token Section */}
//       <section className="token-section">
//         <div className="form-box">
//           <h2>Register Patient</h2>
//           <input type="text" placeholder="Patient Name" />
//           <button>Register</button>

//         </div>
    
//       </section>

//     </div>
//   );
// }


import "./Home.css";
import hospitalImg from "../assets/hospital.jpg";

export default function Home() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hospital Token Management System</h1>
          <p>Fast • Simple • Digital Queue System</p>
          <button className="primary-btn">Get Started</button>
        </div>

        <div className="hero-image">
          <img src={hospitalImg} alt="Healthcare" />
        </div>
      </section>

      {/* Token Section */}
      <section className="token-section">
        <div className="card">
          <h2>Register Patient</h2>
          <input type="text" placeholder="Enter Patient Name" />
          <button className="success-btn">Register</button>
        </div>

        <div className="card">
          <h2>Waiting List</h2>
          <div className="token-item">
            <span>Token 1</span>
            <span>Thejal</span>
          </div>
        </div>
      </section>
    </div>
  );
}