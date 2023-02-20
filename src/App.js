
import './style.css';

// importing react browser
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

// import google analytics
import ReactGA from "react-ga4";

// import components
import RootLayout from "./layouts/RootLayout";
import Home from './pages/Home';
import Work from './pages/Work';

// Creating Browser Router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/work' element={<Work />} />
    </Route>
  )
)

// Initializing google analytics 
ReactGA.initialize("G-P68K9N3CDL");

function App() {

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
