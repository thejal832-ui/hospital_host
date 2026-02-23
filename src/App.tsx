// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Doctors from './pages/AllDoctors';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen">
//         {/* Pink Navbar */}
//         <nav className="bg-[#E5B4B4] px-8 py-3 flex justify-between items-center shadow-sm sticky top-0 z-50">
//           <div className="flex items-center gap-10">
//             <span className="font-bold text-slate-700">HospitalSync</span>
//             <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
//               <Link to="/" className="hover:text-white transition-colors">Home</Link>
//               <Link to="/doctors" className="hover:text-white transition-colors">All Doctors</Link>
//               <Link to="/about" className="hover:text-white transition-colors">About</Link>
//               <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
//             </div>
//           </div>
//           <button className="bg-[#5b6cff] text-white px-5 py-2 rounded-full text-xs font-bold shadow-md hover:bg-blue-600 transition-all">
//             Create Account
//           </button>
//         </nav>

//         {/* Dynamic Route Content */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/doctors" element={<Doctors />} />
//           <Route path="/about" element={<div className="p-20 text-center">About Page</div>} />
//           <Route path="/contact" element={<div className="p-20 text-center">Contact Page</div>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllDoctors from "./pages/AllDoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<AllDoctors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;