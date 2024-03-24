import React from "react";
import SignupPage from "../components/SignupPage";
import { ToastContainer, toast as Toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import useNavbar from "../components/useNavbar";
function Signup()
{
    const {info, setInfo, hiddencreate, setHiddenCreate, hiddenconfirm, setHiddenConfirm, navigate, isLoggedIn, setIsLoggedIn} = useNavbar();
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
        event.preventDefault();
        if(info.create_password !== info.confirm_password)
        {
            Toast.error("Password mismatch");
        }
        
            Toast.success("Account Created");
            navigate("/login");
    }
    return (<div className="mt-5">
        <form onSubmit={clickHandler}>
            <div className="flex gap-x-5">
            <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-xm">First Name <sup className="text-red-500">*</sup></label>
            <input type="text" name="firstname" value={info.firstname} placeholder="Enter first name" onChange={changeHandler} className="mt-1 bg-gray-900 text-white border  rounded-lg px-2 py-2 w-[215px] hover:outline-violet-700" required/>
            </div>

            <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-xm">Last Name<sup className="text-red-500">*</sup></label>
            <input type="text" name="lastname" value={info.lastname} placeholder="Enter last name" onChange={changeHandler} className="mt-1 bg-gray-900 text-white border  rounded-lg px-2 py-2 w-[215px] hover:outline-violet-700" required/>
            </div>
            </div>
            <label htmlFor="email" className="text-white text-xm ">Email Address <sup className="text-red-500">*</sup></label><br/>
            <input type="text" name="email" value={info.email} placeholder="Enter email address" onChange={changeHandler} className="mt-1 bg-gray-900 text-white border  rounded-lg px-2 py-2 w-[450px] hover:outline-violet-700" required/>
            <br/>

            <div className="flex gap-x-5">
            <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-xm">Create Pasword <sup className="text-red-500">*</sup></label>
            <div className="relative">
                    <input type={
                        hiddencreate ? ("password") : ("text")
                    } name="create_password" value={info.create_password}placeholder="Enter Password" onChange={changeHandler} className="mt-1 bg-gray-900 text-white border  rounded-lg px-2 py-2 w-[215px] hover:outline-violet-700" required/>
                    <div className="absolute top-[14px] right-[10px]" onClick={() => setHiddenCreate(!hiddencreate)}>
                    {
                        hiddencreate ? (<IoEye fontSize="20px" color="white"/>) : (<IoEyeOff fontSize="20px" color="white"/>)
                    }
                    </div>
                    
                    <br/>
                </div>
            </div>

            <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-xm">Confirm Password <sup className="text-red-500">*</sup></label>
            <div className="relative">
                    <input type={
                        hiddenconfirm ? ("password") : ("text")
                    } name="confirm_password" value={info.confirm_password}placeholder="Enter Password" onChange={changeHandler} className="mt-1 bg-gray-900 text-white border  rounded-lg px-2 py-2 w-[215px] hover:outline-violet-700" required/>
                    <div className="absolute top-[14px] right-[10px]" onClick={() => setHiddenConfirm(!hiddenconfirm)}>
                    {
                        hiddenconfirm ? (<IoEye fontSize="20px" color="white"/>) : (<IoEyeOff fontSize="20px" color="white"/>)
                    }
                    </div>
                    
                    <br/>
                </div>
            </div>
            </div>
            
            <button  onClick = {clickHandler}className="text-md font-semibold bg-yellow-500 border-2 border-opacity-80 rounded-lg px-2 py-1 w-[450px] justify-center items-center mt-6">
                    Create Account
            </button>
        </form>
        <ToastContainer/>
    </div>);
}

export default Signup;