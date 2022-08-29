// import logo from './logo.svg';
import './style.css';


// import { gsap } from 'gsap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header';
import Splash from './pages/Splash';
import About from './pages/About';
import Work from './pages/Work';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Header />} />
      <Route index element={<Splash/>} />
      <Route path='about' element={<About />} />
      <Route path='work' element={<Work />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
