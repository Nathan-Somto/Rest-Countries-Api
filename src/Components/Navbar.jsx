import React from 'react';
import moon from "../moon.svg";
import sun from "../sun.svg";
function Navbar ({setTheme, Theme}) {
    function changeTheme(){
        if( Theme ==='Dark'){
            setTheme('Light');
        }
        else{
            setTheme('Dark');
        }
    }
    return(
        <nav>
            <ul>
                <li>Where in the World ?</li>
                <li><img src= {Theme === 'Light' ? sun :moon} alt ="toggler" onClick={changeTheme}/>{`${Theme} Mode`}</li>
            </ul>
        </nav>
    );
}

export default Navbar ;