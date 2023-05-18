import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import TopNav from './components/navbar/TopNav';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Category from './pages/Category';
import Product from './components/utils/data';
import ProductDetailPage from './pages/Product_detail';
import Contact from './pages/Contact';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <TopNav />
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category data={Product} />} />
          <Route path='/category/:id' element={<ProductDetailPage />} />
          <Route path='*' element={<h1>Error 404 - page not found</h1>} />
        </Routes>
    
      </BrowserRouter>

    </div>
  );
}

export default App;
