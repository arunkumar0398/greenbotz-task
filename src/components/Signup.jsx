import { Link } from "react-router-dom"


export const SignUp = function() {

    return(
        <div>
            <h1 className="heading">Sign up</h1>

            <form>
                <div className="inputSection">
                    <label htmlFor="name" className="inputLabel">Name</label>
                    <input type="text" name="name" />
                </div>

                <div className="inputSection">
                    <label htmlFor="emailId" className="inputLabel">Email ID</label>
                    <input type="email" name="emailId" />
                </div>

                <div className="inputSection">
                    <label htmlFor="pwd" className="inputLabel">Password</label>
                    <input type="password" name="pwd" />
                </div>

                <div className="block-link">
                    <Link to="/dashboard" className="signUp-link" state={{userSignUp: true}}>Sign Up</Link>
                </div>
            </form>
        </div>
     )
}