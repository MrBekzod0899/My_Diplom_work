import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Country from './Components/Country/Country';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar'
import About from './pages/About/About';
import AllProducts from './pages/allproducts/allProducts';
import { ProductPage } from './pages/AllProducts/ProductPage';
import Home from './pages/Home/Home';
import News from './pages/News';
import Vacancy from './pages/Vacancy';
import VacancyView from './pages/Vacancy/VacancyView';

function App() {
  return (
    <BrowserRouter>
          <Header/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news' element={<News/>}></Route>
            <Route path='/product' element={<AllProducts/>}></Route>
            <Route path='/product/:id' element={<ProductPage/>}></Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/offers' element={<Country/>}/>
            <Route path='/service' element={<Country/>}/>
            <Route path='/vacancy' element={<Vacancy/>}/>
            <Route path='/vacancy/:id' element={<VacancyView/>}/>
            <Route path='/order' element={<Country/>}/>
            <Route path='/partners' element={<Country/>}/>
          </Routes>
          <Footer/>
    </BrowserRouter>
  );
}

export default App;
