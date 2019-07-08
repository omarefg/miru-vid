import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { Container, Typography, useMediaQuery } from '@material-ui/core'
import { Card, CarouselChevron } from './'

export const CardsSection = props => {
    const [state, setState] = useState({ index: null, checked: false })
    const matches = useMediaQuery('(max-width:600px)')

    return (
        <Container
            maxWidth='lg'
        >
            <Typography variant='h5'>
                {props.title}
            </Typography>
            <div
                onMouseEnter={() => setState({ ...state, checked: true })}
                onMouseLeave={() => setState({ ...state, checked: false })}
            >
                <ItemsCarousel
                    gutter={12}
                    chevronWidth={60}
                    numberOfCards={matches ? 1 : 4}
                    slidesToScroll={1}
                    activeItemIndex={state.index}
                    requestToChangeActive={index => setState({ ...state, index })}
                    rightChevron={<CarouselChevron checked={state.checked} chevron='>'/>}
                    leftChevron={<CarouselChevron checked={state.checked} chevron='<'/>}
                >
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ItemsCarousel>
            </div>
        </Container>
    )
}
