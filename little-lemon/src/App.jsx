import "./App.css";
import BookingPage from "./components/Booking/BookingPage";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import OrderOnline from "./components/OrderOnline";
import Menu from "./components/Menu";
// import Login from "./components/Login";
import BookingConfirmation from "./pages/BookingConfirmation";
import BookingForm from "./components/Booking/BookingForm";
import Main from "./components/Main";
import { useContext } from "react";
import { NavigateContext } from "./context/NavigateContext";
import Design from "./components/Design";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*">
      <Route index element={<HomePage />} />
      <Route path="order" element={<OrderOnline />} />
      <Route path="about" element={<About />} />
      <Route path="menu" element={<Menu />} />
      <Route path="design" element={<Design />} />
      <Route path="main" element={<Main />} />
      <Route path="booking" element={<BookingPage />} />
      <Route path="bookingform" element={<BookingForm />} />
      <Route path="bookingconfirmation" element={<BookingConfirmation />} />
    </Route>
  )
);

function App() {
  const navigate = useContext(NavigateContext);
  return (
    <span className="App">
      <NavigateContext.Provider>
        <HomePage />
        <OrderOnline />
        <About />
        <Menu />
        <Design />
        <BookingPage />
        <BookingConfirmation />
        <BookingForm onSubmit={navigate} />
      </NavigateContext.Provider>
    </span>
  );
}

export default App;
