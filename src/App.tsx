import './App.sass'
import Header from './components/header'
import Home from './pages/home';
import Products from './pages/products';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'; 

function App() {

  return (
    <div className='container'>
      <Header/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/products" element={<Products />}/>
        </Routes>
      </ BrowserRouter>
    </div>
  )
}

export default App