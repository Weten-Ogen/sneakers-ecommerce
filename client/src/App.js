import Navbar from './Common/Navbar'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import {Home, About , Contact , Project} from './Pages/index';

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
