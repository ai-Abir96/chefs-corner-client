import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer/Footer";
import MyNavbar from "./components/Layout/Navbar/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default App;
