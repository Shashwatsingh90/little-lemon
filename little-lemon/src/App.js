
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import BookingPage from './components/BookingPage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/booking' element={<BookingPage />}></Route>
      </Routes>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
