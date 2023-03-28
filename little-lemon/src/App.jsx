import "./App.css";
import BookingPage from "./components/Booking/BookingPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import OrderOnline from "./components/OrderOnline";
import Menu from "./components/Menu";
import Login from "./components/Login";
import BookingConfirmation from "./pages/BookingConfirmation";
import { handleSubmit } from "./components/Booking/BookingReducer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*">
      <Route index element={<HomePage />} />
      <Route path="order" element={<OrderOnline />} />
      <Route path="about" element={<About />} />
      <Route path="menu" element={<Menu />} />
      <Route path="login" element={<Login />} />
      <Route path="booking" element={<BookingPage />} />
      <Route path="bookingconfirmation" element={<BookingConfirmation />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <main></main>
      </div>
    </RouterProvider>
  );
}

export default App;
