import Template from "./Template"
function SignupPage()
{
    const content1 = "Join the millions learning to code with StudyNotion for free";
    const content2 = "Build skills for today, tomorrow, and beyond";
    const content3 = "Education to future-proof your career.";
    const fileType = "signup";
    
    return(
        <Template content1 = {content1} content2={content2}  content3={content3} fileType = {fileType}/>
    );
}

export default SignupPage;