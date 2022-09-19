import React, { useEffect, useState } from 'react'
import dota from './../../assets/images/dota2-logo.jpg'
import { Link } from 'react-router-dom'
import { BsList } from 'react-icons/bs'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const closeMobileMenu = () => {
        return
    }

    const handleOpenModal = () => {
        setClick(!click)
    }

    const showButton = () => {
        if (window.innerWidth <= 760) {
            setButton(true)
        } else {
            setButton(false)
            setClick(false)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div>
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <p>Dota2</p>
                            <img src={dota} alt="dota2" />
                        </Link>
                    </div>
                    <div>
                        <ul className={button ? 'nav-menu-none' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/media" className="nav-links" onClick={closeMobileMenu}>
                                    Media
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/heroes" className="nav-links" onClick={closeMobileMenu}>
                                    Heroes
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/items" className="nav-links" onClick={closeMobileMenu}>
                                    Items
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                                    Blog
                                </Link>
                            </li>
                        </ul>

                        {button ? (
                            <div className="bars">
                                <BsList onClick={handleOpenModal} />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

            {click ? (
                <div className="mobile-navbar">
                    <ul>
                        <li className="mobile-nav-item">
                            <Link to="/news" className="nav-mobile-links" onClick={closeMobileMenu}>
                                News
                            </Link>
                        </li>

                        <li className="mobile-nav-item">
                            <Link to="/heroes" className="nav-mobile-links" onClick={closeMobileMenu}>
                                Heroes
                            </Link>
                        </li>

                        <li className="mobile-nav-item">
                            <Link to="/items" className="nav-mobile-links" onClick={closeMobileMenu}>
                                Items
                            </Link>
                        </li>

                        <li className="mobile-nav-item">
                            <Link to="/blog" className="nav-mobile-links" onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : null}
        </>
    )
}

export default Navbar
