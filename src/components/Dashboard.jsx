import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const [profile, setProfile] = useState(() => {
        return window.location.pathname == '/dashboard#profile';
    });
    const [about, setAbout] = useState(() => {
        return window.location.pathname == '/dashboard#about';
    });

    const showProfile = () => {
        setProfile(true);
        setAbout(false);
    }

    const showAbout = () => {
        setProfile(false);
        setAbout(true);
    }


    useEffect(() => {

        return () => {
            if(window.location.pathname == '/' || window.location.pathname == '/login'){
                window.location.href =  'http://localhost:5173/dashboard';
            }

            
        }
    }, [])

    return(
            <>
                <h1>Dashboard</h1>
                <div>
                    <ul id="unorderList">
                        <li className=""> 
                            <a href="#profile" onClick={showProfile}> Profile</a>
                        </li>
                        <li className="">
                            <a href="#about" onClick={showAbout}> About us</a>
                        </li>
                    </ul>
                </div>

                {profile && <div id="profle">
                    Profile section
                </div>}

                {about && <div id="about">
                    About section
                </div>}
            </>

    )
}
