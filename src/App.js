import Navbar from './Common/Navbar'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import {Home} from './Pages/index';

import './main.css'


function App() {
  return (
   <div className='app-container'>
    <Router>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router> 
   </div>

  );
}

export default App;
