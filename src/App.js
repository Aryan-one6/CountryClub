import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Footer from './components/Footer';
import { useEffect } from 'react';
import Services from './Pages/Services';
import ServiceProviderDetails from './Pages/ServiceProviderDetails';

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  }, [location.pathname]);

  return (
    <div className='container-fluid'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/ServiceProvider/:ProviderId/:name' element={<ServiceProviderDetails/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
