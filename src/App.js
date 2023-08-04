import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/footer";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact";


import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/Home.scss";
import "./styles/footer.scss";
import "./styles/contacts.scss";
import "./styles/mediaquery.scss";




function App() {
  return (
    <Router>
      <Header/>
      <Routes>
         <Route path ="/" element={<Home/>}/>
         <Route path ="/contact" element={<Contact/>}/>
         <Route path ="/Services" element={<Services/>}/>
       </Routes>
    
    
  <Footer/>
    </Router>


    
    
  );
}

export default App;
