import { Outlet } from "react-router-dom";
import Navbar from "../Headers/Navbar";
import Footer from "../Footer/Footer";
const Root = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
            </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
    );
};

export default Root;