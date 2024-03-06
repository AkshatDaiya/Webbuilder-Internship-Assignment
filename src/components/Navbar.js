import React, { useState } from 'react'

function Navbar() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
    };

    return (
        <nav id='Navbar'>

            <div className="search">
                <span><button><i class="fa-solid fa-magnifying-glass"></i></button><input type="text" /></span>
            </div>
            <div className={isClicked ? "list active" : "list"}>
                <ul>
                    <li>Categories</li>
                    <li>Website Builders</li>
                    <li>Today's deals</li>
                </ul>

            </div>

            <div className="burger">
                <i className={isClicked ? "fa-solid fa-xmark text-light" : "fa-solid fa-bars text-light"} onClick={handleClick}></i>
            </div>
        </nav>
    )
}

export default Navbar
