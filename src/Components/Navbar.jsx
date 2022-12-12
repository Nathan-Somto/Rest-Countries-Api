import React from 'react';
import moon from "../moon.svg";
import sun from "../sun.svg";
function Navbar ({setTheme, Theme}) {
    function changeTheme(){
        let theme = document.querySelector('html');
        if( Theme ==='Dark'){
            setTheme('Light');
            theme.setAttribute('data-theme','Light')
            
        }
        else{
            setTheme('Dark');
            theme.setAttribute('data-theme','Dark');
        }
    }
    return(
        <nav className="mainNav">
            <ul>
                <li>Where in the World ?</li>
                <li><img src= {Theme === 'Light' ? moon : sun} alt ="toggler" onClick={changeTheme}/> 
                <span>{`${Theme} Mode`}</span></li>
            </ul>
        </nav>
    );
}

export default Navbar ;