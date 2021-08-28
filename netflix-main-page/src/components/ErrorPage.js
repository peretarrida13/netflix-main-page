import React from 'react'; 
import {
    errorCode,
    errorCodeDiv,
    ErrorDiv,
    ErrorMsg,
    ErrorTitle,
    errorType,
    imgTitle,
    LogoBtn2,

    navbar,
} from '../styles/Styles';
import topMiniLogo from '../images/topMiniLogo.png';
import { Link } from 'react-router-dom';

export const ErrorPage = () =>{
    return(
        <div style={ErrorDiv}>
            <div>
                <nav style={navbar}>
                    <Link to='/'><img alt='logo' src={topMiniLogo} style={LogoBtn2}/></Link>
                </nav>  

                
            </div>
            <h1 style={ErrorTitle}>Lost your way?</h1>
            <p style={ErrorMsg}>Sorry, we can't find that page. You'll find lots to explore on the home<br/>page.</p>
            <Link to='/' className='returnBtn'>Netflix Home</Link>

            <div style ={errorCodeDiv}>
                <p style={errorCode}>Error Code</p>
                <p style={errorType}>NSES-404</p>
            </div>

            <span style={imgTitle}>FROM <strong>LOST IN SPACE</strong></span>
        </div>
    )
}