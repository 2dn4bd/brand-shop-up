import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
    logOut()
    .then()
    .catch()
    }

    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addproduct">Add Product</NavLink></li>
    <li><NavLink to="/mycart">My Cart</NavLink></li>
</>
    return (
        <>
        <div className="container mx-auto  opacity-100 ">
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-bold text-xl shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                </ul>
                </div>
                <div className="flex items-center">
                <img className=" normal-case w-20 md:w-16 lg:w-24" src="https://i.ibb.co/fdx7zD7/logo.png" alt="" />
                <h2 className="md:text-2xl text-xl font-bold lg:text-4xl ">
                Re<span className="text-[#56B280] md:text-gl lg:text-5xl">V</span>amp
                </h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-bold text-lg px-1 ">
                        {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            <div className="flex items-center gap-2">
                            {
                                user ? <>
                                    <span className="font-bold md:text-xl">{user.displayName}</span>
                                </>
                                : ''
                            }

                        <div>
                            {
                                user ? <>
                                <img className="w-14 mr-4 lg:w-16 rounded-full" src={user.photoURL} alt="" />
                                </>
                                : ''
                            }
                        </div>
                    </div>
                    <div>
                    {
                        user ? <button onClick={handleLogOut} className=" bg-[#56B280] shadow-md shadow-green-500-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] text-white py-3 px-4 rounded-md font-bold">
                        Log Out
                    </button> :<Link to={"/login"} className=" bg-[#56B280] shadow-md shadow-green-500-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] text-white py-3 px-4 rounded-md font-bold">
                            Login
                        </Link>
                    }
                    </div>
          </div>
            </div>
                </div>
                </>

    );
};







export default Navbar;