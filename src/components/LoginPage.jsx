import Template from "./Template";

function LoginPage()
{
    const content1 = "Welcome Back";
    const content2 = "Build skills for today, tomorrow, and beyond.";
    const content3 = "Education to future-proof your career.";
    const fileType = "login";
    
    return(
        <Template content1 = {content1} content2={content2}  content3={content3} fileType = {fileType}/>
    );
}

export default LoginPage;