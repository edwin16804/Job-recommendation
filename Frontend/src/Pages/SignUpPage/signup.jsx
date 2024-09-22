import "./signup.css";
import image from './signup.png';
const Signup=()=>{
    return(
        <div className="signup-page">
            <div className="main">
                <div className='signup-details'>
                    <h2>Create an account</h2>
                    <form>
                        <label for="username">Username</label>
                        <input type='text' name="username"></input><br/>
                        <label for="password">Password</label>
                        <input type='password' name="password"></input><br/>
                        <label for="email">Email</label>
                        <input type='email' name="email"></input><br/>
                        <label for="phone">Phone no.</label>
                        <input type='text' name="phone"></input><br/>
                        <label for="address">Address</label>
                        <input type='text' name="address"></input><br/>
                        <center><a href="login">Already have an account?Login</a></center>
                        <center><button type="submit" className='signup-btn'>Signup</button></center>
                        
                    </form>
                </div>  
                <img src={image} alt="logo" style={{height:500, width:600,position:'absolute',left:720,top:80}}/>
            </div>
        </div>

    )
}

export default Signup;