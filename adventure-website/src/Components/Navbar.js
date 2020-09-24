import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from './Button';

export default function Navbar() {
    //  STATE
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    //  FUNCTIONS
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    // window event listener for responsiveness
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navBar">
                <div className="navBar-container">
                    <Link 
                        to="/" 
                        className="navBar-logo"
                        onClick={closeMobileMenu}
                        >
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link 
                                to='/' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to='/services' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to='/products' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to='/sign-up' 
                                className='nav-links-mobile' 
                                onClick={closeMobileMenu}
                            >Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && 
                    <Button
                        buttonStyle='btn--outline'
                    >SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}
