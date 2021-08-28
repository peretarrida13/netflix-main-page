import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'; 
import topMiniLogo from '../images/topMiniLogo.png';
import{
    LogoBtn,
    profileImgNavbar,
} from '../styles/Styles';


export const MainPageNavbar = ()=>{
    const [showNavbar, setShowNavbar] = useState(false); 

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 50){
               setShowNavbar(true)
            } else{
                setShowNavbar(false);
            }
        });
    }, []); 

    return(
        <nav className={showNavbar ? 'navbarMainPage-show' : 'navbarMainPage'}>
            <Link to='/mainpage'><img src={topMiniLogo} style={LogoBtn}/></Link>
            <img src='https://occ-0-4671-360.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUCZYfPbupvQjzSa3egePk8TFNDy2A_w15DEAq50IqW8MYmOtmbWwN4Txem7mgNYEMPJ1BY6uasiIJQ8JeFO3EU.png?r=b97' alt='profileImg' style={profileImgNavbar} onClick={changeProfile}/>
        </nav>
    );
}