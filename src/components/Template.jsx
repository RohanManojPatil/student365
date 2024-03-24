import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { FcGoogle } from "react-icons/fc";
import loginImg from "./login.png";
import signupImg from "./signup.png";
import backImg from "./frame.png";
export default function Template({content1, content2, content3, name, fileType})
{
    return (
    <div className="w-screen h-screen bg-gray-900 ">
        <div className="w-10/12 bg-gray-900 flex justify-between mx-auto pt-12">
            <div>
                <h1 className="text-[30px] text-white font-semibold w-[450px] leading-10">{content1}</h1>
                <p className="text-lg text-white opacity-65 mt-3 tracking-normal">{content2}</p>
                <p className="text-lg tracking-normal text-blue-400 opacity-65 tracking-normal">{content3}</p>
                
                {
                    fileType === "login" ? (<Login/>) : (<Signup/>)
                }

                <div className="flex gap-2 mt-6">
                    <div className="w-[215px] h-[1px] bg-white opacity-15 mt-3"></div>
                    <span className="text-white opacity-15">OR</span>
                    <div className="w-[195px] h-[1px] bg-white opacity-15 mt-3"></div>
                </div>

                <button className="flex gap-x-3 bg-gray-700 border-2 border-opacity-80 rounded-lg px-2 py-1 w-[450px] justify-center items-center mt-6">
                <FcGoogle />
                <span className="text-md text-white">Sign in With Google</span>
                </button>
            </div>

            <div>
            
                    <img src={backImg} width="450px" height="450px" className="relative z-4"></img>
                    {
                        fileType === "login" ? (<img src = {loginImg} width="450px" height="450px" className="absolute top-[90px] right-[130px] z-10"></img>) : (<img src = {signupImg} width="450px" height="450px" className="absolute top-[90px] right-[130px] z-10"></img>)
                    }
            </div>
    </div>
    </div>
    )
}