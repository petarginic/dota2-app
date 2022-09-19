import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Hero, Navbar, Footer, SectionItems, CardItem, Banner } from './../components'
import data from './../data.json'

import video from './../assets/videos/heroes.mp4'

const Heroes = () => {
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        setHeroes(data.heroes)
    }, [])

    return (
        <>
            <Navbar />
            <Hero title="Look all Heroes below" subtitle="Who are you choosing?" video={video}></Hero>
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
            <Banner
                style={{
                    backgroundImage: `url("https://esportsjunkie.com/wp-content/uploads/2022/06/474206.jpg")`,
                    backgroundPosition: '30% 40%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            />

            <Footer />
        </>
    )
}

export default Heroes
