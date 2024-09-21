import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AllRoutes from './Components/AllRoutes';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <Router>
         <Navbar/>
         
         <AllRoutes/>
         <Footer/>
    </Router>
  );
}

export default App;
