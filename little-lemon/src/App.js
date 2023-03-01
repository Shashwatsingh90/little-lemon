
import './App.css';
import BookingPage from './components/BookingPage'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/booking' element={<BookingPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
