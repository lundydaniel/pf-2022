
import './style.css';

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';


// import components
import RootLayout from "./layouts/RootLayout";
import Home from './pages/Home';
import Work from './pages/Work';
// Creating Browser Router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='work' element={<Work />} />
    </Route>
  )
)

function App() {

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
