import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className = "header">
            <IconButton>
                <PersonIcon fontsize="large" className="header__icon"/>
            </IconButton>
            <img src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="" className="header__logo"/>
            <IconButton fontsize="large" className="header__icon">
                 <ForumIcon/>
            </IconButton>
           
           
           
        </div>
    )
}
export default Header

