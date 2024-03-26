import './App.css';
import {Routes,Route} from "react-router-dom";

import Home from "./routes/home";
import Service from './routes/service';
import About from './routes/about';
import Contact from './routes/contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
     
    
    </div>
  );
}

export default App;
