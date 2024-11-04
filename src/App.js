import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div className='container-fluid'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
