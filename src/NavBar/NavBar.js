import React, {useContext, useEffect, useState} from "react";
import './NavBar.css'
import {Link} from "react-router-dom";
import {Context} from "../context";

const NavBar = () => {

    const [show, handleShow] = useState(false);

    const [user] = useContext(Context);
    console.log('User', user)

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
            <div>
                <Link to='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                         className='navbar_logo'
                         alt='Logo'/>
                </Link>

            </div>
            <div>
                {user ? (
                        <>
                            <span className='loggedIn'>Hey, {user.username}</span>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                                 className='navbar_avtar'
                                 alt='Logo'/>
                        </>
                    )
                    :
                    (
                        <Link to='/login'>
                            {/*<span className='login'>Login</span>*/}
                            {/*<button>dfsdf</button>*/}
                            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                                 className='navbar_avtar'
                                 alt='Logo'/>
                        </Link>
                    )}

            </div>
        </div>
    )
};

export default NavBar;