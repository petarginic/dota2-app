import React from 'react'
import { Link } from 'react-router-dom'

import video from './../assets/videos/video-hero.mp4'
import image from './../assets/images/section-cover.jpg'
import jugger from './../assets/images/jugger.png'
import silencer from './../assets/images/silencer.jfif'
import phantom from './../assets/images/phantom.jfif'
import bristle from './../assets/images/bristle.jfif'

import { Hero, Navbar, Section, Button, Banner, Footer, CardHero } from './../components'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Hero title="Adventure Awaits" subtitle="What are you waiting for?" video={video}>
                <Button className="btns">GET STARTED</Button>
                <Button className="btns">WATCH TRAILER</Button>
            </Hero>
            <Section title="Check out new heroes and items" subtitle="Try it now">
                <Link to="/heroes">
                    <CardHero
                        style={{ backgroundImage: `url(${jugger})`, backgroundPosition: '50% 40%' }}
                        title="Juggernaut"
                        type="Carry"
                        attack="80%"
                        defense="50%"
                        mobility="70%"
                    />
                </Link>

                <Link to="/heroes">
                    <CardHero
                        title="Silencer"
                        style={{ backgroundImage: `url(${silencer})` }}
                        type="Support"
                        attack="50%"
                        defense="40%"
                        mobility="60%"
                    />
                </Link>
                <Link to="/heroes">
                    <CardHero
                        title="Phantom Lancer"
                        style={{ backgroundImage: `url(${phantom})` }}
                        type="Carry"
                        attack="70%"
                        defense="40%"
                        mobility="30%"
                    />
                </Link>
                <Link to="/heroes">
                    <CardHero
                        title="Bristleback"
                        style={{ backgroundImage: `url(${bristle})`, backgroundPosition: '50% 20%' }}
                        type="Carry"
                        attack="60%"
                        defense="90%"
                        mobility="50%"
                    />
                </Link>
            </Section>
            <Banner style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center' }}>
                <div className="banner-content">
                    <div className="banner-content-flex">
                        <h2>Join the</h2>
                        <h1>Battle</h1>
                        <Button> Play now</Button>
                    </div>
                </div>
            </Banner>
            <Footer />
        </div>
    )
}

export default Home
