import Navbar from './Common/Navbar'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import './main.css'


function App() {
  return (
   <div className='app-container'>
    <Router>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </Router> 
   </div>

  );
}

export default App;
