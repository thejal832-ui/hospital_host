
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllDoctors from "./pages/AllDoctors";


function App() {
  return (
  
    <BrowserRouter>
      <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/doctors">AllDoctors</Link>
      </nav>
      
      <div>
        {/* nav */}
        {/* routes */}
        {/* other content */}

      </div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<AllDoctors />} />
      </Routes>
     
        <a href="https://vite.dev" target="_blank">
        </a>

      
      {/* </div>
      <h1>Vite + React</h1>
      <div className="App"> */}

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       {/* <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Routes>
          <Route path="/" element={<h1>HOME PAGE</h1>} />
          <Route path="/about" element={<h1>ABOUT PAGE</h1>} />
        </Routes>
      </div> */}

    
    </BrowserRouter>

  )
}

export default App
