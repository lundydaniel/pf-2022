
import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

// import components
import Header from './components/Header';
import Splash from './components/Splash';
import Home from './pages/Home';
import Work from './pages/Work';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4300);
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
              <Route index element={<Home />} />
              <Route path='home' element={<Home />} />
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
