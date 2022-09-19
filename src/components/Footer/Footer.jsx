import React from 'react'
import dota from '../../assets/images/dota2-logo.jpg'
import youtube from '../../assets/images/youtube.png'
import twitch from '../../assets/images/twitch.png'
import steam from '../../assets/images/steam.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div>
                    <Link to="/" className="navbar-logo-footer">
                        <p>Dota2</p>
                        <img src={dota} alt="dota2" />
                    </Link>
                </div>

                <div className="footer-icons">
                    <Link to="/" className="navbar-logo-footer">
                        <img src={youtube} alt="dota2" />
                    </Link>
                    <Link to="/" className="navbar-logo-footer">
                        <img src={twitch} alt="dota2" />
                    </Link>
                    <Link to="/" className="navbar-logo-footer">
                        <img src={steam} alt="dota2" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
