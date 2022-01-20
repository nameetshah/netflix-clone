import React, {useEffect, useState} from "react";
import './NavBar.css'

const NavBar = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);


    return (
        <div className={`navbar ${show && 'navbar_show'}`}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' className='navbar_logo'
                 alt='Logo'/>
        </div>
    )
};

export default NavBar;