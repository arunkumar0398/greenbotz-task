import { Link } from "react-router-dom"


export const Login = function() {

    return(
        <div>
            <h1>Login</h1>

            <form>
                <div className="">
                    <label htmlFor="name" className="inputLabel">Name</label>
                    <input type="text" name="name" />
                </div>

                <div className="">
                    <label htmlFor="pwd" className="inputLabel">Password</label>
                    <input type="password" name="pwd" />
                </div>

                <Link to="/dashboard" state={{userLogin: true}}>Login</Link>
            </form>
        </div>
     )
}