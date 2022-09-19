import React, { useEffect, useState } from 'react'
import { Hero, Navbar, Footer, SectionItems, CardItem, Banner } from './../components'

import data from './../data.json'
import image from './../assets/images/cover.jpg'

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(data.items)
    }, [])

    return (
        <>
            <Navbar />
            <Hero
                title="Check out all the items from DotA 2"
                subtitle="Get the best advice on how to use them!"
                image={image}
            ></Hero>
            <SectionItems title="Good luck,have fun">
                {items &&
                    items.map((item, key) => {
                        return (
                            <CardItem
                                key={item.id}
                                title={item.name}
                                style={{ backgroundImage: `url(${item.front_image})`, backgroundSize: 'cover' }}
                                link="#"
                            />
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

export default Items
