import React from "react";

const Header = () => {
    return(
        <div className='header'>
            <div className='company-name-container'>
                <a href="/"><h3 className="company-name">Delivery management</h3></a>
            </div>
            <div className='nav-items'>
                <ul>
                    <a href="/componentRegister">Component register</a>
                    <a href="/issueRegister">Issue register</a>
                    <a href="/vehicleRegister">Vehicle register</a>
                </ul>
            </div>
        </div>
    )
}

export default Header;