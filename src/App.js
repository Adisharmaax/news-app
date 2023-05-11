import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import Homepages from "./components/home/Homepages";

function App() {
   
  return (
    <>
    
    <BrowserRouter>

    <Header />
    <Homepages/>
       <Routes>
        
        
       
       </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App