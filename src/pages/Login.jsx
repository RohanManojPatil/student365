import React from "react";
import { ToastContainer, toast as Toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import useNavbar from "../components/useNavbar";

function Login()
{
    const {info, setInfo, hidden, setHidden, isLoggedIn, setIsLoggedIn,navigate} = useNavbar();
    // setIsLoggedIn(false);
    function changeHandler(event)
    {
        setInfo((prev) =>[
        {
            ...prev,
            [event.target.name]: event.target.value
        }]);
    }

    function clickHandler(event)
    {
        console.log(isLoggedIn);
        event.preventDefault();
        Toast.success("Login Successfull");
        setIsLoggedIn(true);
        navigate("/dashboard");
        console.log(isLoggedIn);
    }
    return (
    <div className="mt-5">
        <form onSubmit={clickHandler}>
            <label htmlFor="email" className="text-white text-xm">Email Address <sup className="text-red-500">*</sup></label><br/>
            <input type="text" name="email" value={info.email} placeholder="Enter email address" onChange={changeHandler} className="mt-1 bg-gray-900 text-white border  rounded-lg px-2 py-2 w-[450px] hover:outline-violet-700" required/>
            <br/>
            <div className="mt-3"> 
                <label htmlFor="password" className="text-white text-xm">Password <sup className="text-red-500">*</sup></label><br/>
                <div className="relative">
                    <input type={
                        hidden ? ("password") : ("text")
                    } name="password" value={info.password}placeholder="Enter Password" onChange={changeHandler} className="mt-1 bg-gray-900 text-white border  rounded-lg px-2 py-2 w-[450px] hover:outline-violet-700" required/>
                    <div className="absolute top-[14px] right-[15px]" onClick={() => setHidden(!hidden)}>
                    {
                        hidden ? (<IoEyeOff fontSize="20px" color="white"/>) : (<IoEye fontSize="20px" color="white"/>)
                    }
                    </div>
                    
                    <br/>
                </div>
                
                <p className="flex justify-end w-[450px] text-violet-300 cursor-pointer"> Forgot password</p>
            </div>
            
            <button className="text-md font-semibold bg-yellow-500 border-2 border-opacity-80 rounded-lg px-2 py-1 w-[450px] justify-center items-center mt-6">
                    Sign In
            </button>
        </form>
        <ToastContainer/>
    </div>);
}

export default Login;