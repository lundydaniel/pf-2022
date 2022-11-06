
import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header';
import About from './pages/About';
import Work from './pages/Work';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='work' element={<Work />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
