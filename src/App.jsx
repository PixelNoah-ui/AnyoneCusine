import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./Components/ui/Spinner";
import "./index.css";

import ProtectRoutes from "./Components/ui/ProtectRoutes";

const Home = lazy(() => import("./page/Home"));
const Menu = lazy(() => import("./page/Menu"));
const Cart = lazy(() => import("./page/Cart"));
const About = lazy(() => import("./page/About"));
const ContactPage = lazy(() => import("./page/Contact"));
const Checkout = lazy(() => import("./page/Checkout"));
const Myorder = lazy(() => import("./page/Myorder"));
const Layout = lazy(() => import("./Components/layout/Layout"));
const FoodDetails = lazy(() => import("./Components/home/FoodDetails"));
const SignInForm = lazy(() => import("./Components/ui/SingInForm"));
const OrderSuccess = lazy(() => import("./page/OrderSuccess"));
const PageIsNotFound = lazy(() => import("./page/PageIsNotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            element={
              <ProtectRoutes>
                <Layout />
              </ProtectRoutes>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dish/:dishID" element={<FoodDetails />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/myorder" element={<Myorder />} />
            <Route path="*" element={<PageIsNotFound />} />
          </Route>
          <Route path="/login" element={<SignInForm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
