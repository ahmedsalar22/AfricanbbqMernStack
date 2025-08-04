import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import CartViewPage from "./Pages/CartViewPage";
import CheckOutPage from "./Pages/CheckOutPage";
import OrderTrackingPage from "./Pages/OrderTrackingPage";

import EventDetailPage from "./Pages/EventDetailPage";
import ContactPage from "./Pages/ContactPage";
import MenuPage from "./Pages/MenuPage";
import EventPackage from "./PagesComponent/EventPackage/EventPackage";
import AboutUsPage from "./Pages/AboutUsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="/cart" element={<CartViewPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/ordertracking" element={<OrderTrackingPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/eventdetails" element={<EventDetailPage/>} />
          <Route path="/menu" element={<MenuPage/>}/>
          <Route path="/eventPackage" element={<EventPackage/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
