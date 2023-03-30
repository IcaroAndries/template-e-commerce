import './App.sass'
import Header from './components/header'
import Home from './pages/home';
import Products from './pages/products';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {

  return (
    <>
      <Header />
      <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/products" element={<Products />}/>
        </Routes>
      </ BrowserRouter>
    </div>
    </>
  )
}

export default App