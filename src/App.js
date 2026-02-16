import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About'; // This is your "new page"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/about">Go to About Page</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
<a href="/page.html" target="_blank" rel="noopener noreferrer">
  View my HTML Page
</a>

export default App;
