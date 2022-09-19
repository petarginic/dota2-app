import React, { useEffect, useState } from 'react'

import { useParams, Link, useNavigate } from 'react-router-dom'

import { Navbar, Footer, Button, CardHero, SectionItems, CardItem } from './../index'

import data from './../../data.json'

const HeroDetails = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const [heroes, setHeroes] = useState([])

    const handleOnPreviouseHero = () => {
        navigate(`/heroes/${Number(id) - 1}`)
    }

    const handleOnNextHero = () => {
        navigate(`/heroes/${Number(id) + 1}`)
    }

    useEffect(() => {
        setHeroes(data.heroes)
    }, [])

    const foundedHero = heroes.find((hero) => hero.id === Number(id))

    if (foundedHero === undefined) {
        return <p>Loading..</p>
    }

    return (
        <>
            <Navbar />
            <div
                className="hero-details"
                style={{
                    backgroundImage: `url(${foundedHero.back_image})`,
                    zIndex: '-1',
                    backgroundSize: 'cover',
                }}
            >
                <div className="hero-details-content">
                    <div className="hero-details-card">
                        <CardHero
                            title={foundedHero.title}
                            style={{
                                backgroundImage: `url(${foundedHero.front_image})`,
                                backgroundSize: 'cover',
                            }}
                            type={foundedHero.group}
                            attack="50%"
                            defense="40%"
                            mobility="60%"
                        />
                    </div>

                    <div className="hero-details-description">
                        <h1>{foundedHero.name}</h1>
                        <p> {foundedHero.details}</p>
                    </div>
                </div>
                <div className="hero-details-buttons">
                    <div className="button-details">
                        <Button
                            onClick={() => {
                                handleOnPreviouseHero()
                            }}
                        >
                            Previous Hero
                        </Button>
                    </div>

                    <div className="button-details">
                        <Button
                            onClick={() => {
                                handleOnNextHero()
                            }}
                        >
                            Next Hero
                        </Button>
                    </div>
                </div>
            </div>

            <SectionItems title="Good luck,have fun">
                {heroes &&
                    heroes.map((hero, key) => {
                        return (
                            <Link to={`/heroes/${hero.id}`}>
                                <CardItem
                                    key={hero.id}
                                    title={hero.name}
                                    style={{ backgroundImage: `url(${hero.front_image})`, backgroundSize: 'cover' }}
                                />
                            </Link>
                        )
                    })}
            </SectionItems>

            <Footer />
        </>
    )
}

export default HeroDetails
