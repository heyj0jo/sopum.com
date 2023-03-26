import './App.css';
import {Footer,About, Navbar, Hero, Products, Contact, Signup, Home, ScrollAnim} from "./components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
      
  );
}

export default App;
