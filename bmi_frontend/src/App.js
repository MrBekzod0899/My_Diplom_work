import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Country from './Components/Country/Country';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar'
import Home from './pages/Home/Home';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
          <Header/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='country' element={<Country/>}/>
          </Routes>

          <Footer/>
    </BrowserRouter>
  );
}

export default App;
