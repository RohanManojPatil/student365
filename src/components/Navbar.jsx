import Logo from './Logo.svg';
import { NavLink, useLinkClickHandler } from "react-router-dom";
import useNavbar from "./useNavbar.jsx";

function Navbar()
{
    const {isLoggedIn, setIsLoggedIn} = useNavbar();
    return(
        <div className="bg-gray-900 ">
            <div className="flex justify-between w-10/12 mx-auto pt-4">
            <div>
                <img src={Logo} />
            </div>

            <div className="ml-20 text-white text-[17px] opacity-90 leading-7 tracking-wider ">
                <ul className="flex gap-6">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex gap-x-6 text-white text-[17px] opacity-60 leading-7 ">
                {
                    (!isLoggedIn) &&
                    <NavLink to="/login">
                        <button onClick={() => setIsLoggedIn(!isLoggedIn)} className='bg-gray-700 border-2 border-opacity-80 rounded-lg px-2 py-1'>
                            Log in
                        </button>
                    </NavLink>
                }
                
                {
                    (!isLoggedIn) &&
                    <NavLink to="/signup">
                        <button onClick={() => setIsLoggedIn(!isLoggedIn)} className='bg-gray-700 border-2 border-opacity-80 rounded-lg px-2 py-1'>
                            Sign up
                        </button>
                    </NavLink>
                }
                {
                    (isLoggedIn) &&
                    <NavLink to="/">
                        <button onClick={() => setIsLoggedIn(!isLoggedIn)} className='bg-gray-700 border-2 border-opacity-80 rounded-lg px-2 py-1'>
                            Log out
                        </button>
                    </NavLink>
                }   

                {
                    (isLoggedIn) &&
                    <NavLink to="/dashboard">
                        <button onClick={() => setIsLoggedIn(!isLoggedIn)} className='bg-gray-700 border-2 border-opacity-80 rounded-lg px-2 py-1'>
                            Dashboard
                        </button>
                    </NavLink>
                }
            </div>
        </div>
        </div>
        
    )
}

export default Navbar;