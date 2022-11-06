
import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

// import components
import Header from './components/Header';
import Splash from './components/Splash';
import About from './pages/About';
import Work from './pages/Work';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5800);
  }, []);

  return (
    <main>
      <section className='app-start'>
        {
          loading ?

          <Splash 
          loading={loading}
          />
          :
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<Splash />} />
              <Route index element={<About />} />
              <Route path='about' element={<About />} />
              <Route path='work' element={<Work />} />
            </Routes>
          <Footer />
        </BrowserRouter>
        }
        </section>
    </main>
  );
}

export default App;
