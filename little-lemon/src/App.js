
import './App.css';
import BookingPage from './components/BookingPage'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import OrderOnline from './components/OrderOnline';
import Menu from './components/Menu';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/booking' element={<BookingPage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/order' element={<OrderOnline />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
