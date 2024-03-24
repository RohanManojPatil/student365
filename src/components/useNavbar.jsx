import { useState } from "react";
import { useNavigate } from "react-router-dom";
function useNavbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const[info, setInfo] = useState({firstname:"", lastname:"", email:"", create_password:"", confirm_password:""});
    const[hiddencreate, setHiddenCreate] = useState(false);
    const[hiddenconfirm, setHiddenConfirm] = useState(false);
    const navigate = useNavigate();
    const[logininfo, setloginInfo] = useState({email:"", password:""});
    const[hidden, setHidden] = useState(false);
    return { isLoggedIn, setIsLoggedIn, info, setInfo, hiddencreate, setHiddenCreate, hiddenconfirm, setHiddenConfirm, navigate, logininfo, setloginInfo, hidden, setHidden };
}

export default useNavbar;
