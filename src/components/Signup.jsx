import { Link } from "react-router-dom"


export const SignUp = function() {

    return(
        <div>
            <h1>Sign up</h1>

            <form>
                <div className="">
                    <label htmlFor="name" className="inputLabel">Name</label>
                    <input type="text" name="name" />
                </div>

                <div className="">
                    <label htmlFor="emailId" className="inputLabel">Email ID</label>
                    <input type="email" name="emailId" />
                </div>

                <div className="">
                    <label htmlFor="pwd" className="inputLabel">Password</label>
                    <input type="password" name="pwd" />
                </div>

                <Link to="/dashboard" state={{userSignUp: true}}>Sign Up</Link>
            </form>
        </div>
     )
}