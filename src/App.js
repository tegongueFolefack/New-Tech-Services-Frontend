import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileTemplate from "./pages/ProfilTemplate/ProfileTemplate";
import AccountGeneral from "./pages/ProfilTemplate/AccountGeneral";
import AccountInfo from "./pages/ProfilTemplate/AccountInfo";
import ChangePassword from "./pages/ProfilTemplate/ChangePassword";
import Notifications from "./pages/ProfilTemplate/Notification";
import SocialConnections from "./pages/ProfilTemplate/SocialConnection";
import SocialLinks from "./pages/ProfilTemplate/SocialLink";

  

const Layout = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/category/:category" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>

      <Route path="/signup" element={<SignUp />}></Route> 
      <Route path="/signin" element={<SignIn />}></Route>

      <Route path="/profil" element={<ProfileTemplate />}></Route>
      <Route path="/AccountGeneral" element={<AccountGeneral />}></Route>
      <Route path="/AccountInfo" element={<AccountInfo />}></Route>
      <Route path="/ChangePassword" element={<ChangePassword />}></Route>
      <Route path="/Notifications" element={<Notifications />}></Route>
      <Route path="/SocialConnections" element={<SocialConnections />}></Route>
      <Route path="/SocialLinks" element={<SocialLinks />}></Route>
     
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
