import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { Container, Typography, Grid } from '@material-ui/core'
import { Card } from './'

export const CardsSection = props => {
    const [index, setIndex] = useState()

    return (
        <Container maxWidth='lg'>
            <Typography variant='h5'>
                Miru Recomienda
            </Typography>
            <ItemsCarousel
                gutter={12}
                activePosition={'center'}
                chevronWidth={60}
                numberOfCards={4}
                slidesToScroll={1}
                outsideChevron={true}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={index}
                requestToChangeActive={index => setIndex(index)}
                rightChevron={'>'}
                leftChevron={'<'}
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
        </Container>
    )
}
