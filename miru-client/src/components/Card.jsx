import React from 'react'
import { CardMedia, CardActionArea, Card as CardUI } from '@material-ui/core'

export const Card = props => {
    return (
        <CardUI>
            <CardActionArea>
                <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='140'
                    image='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                    title='Contemplative Reptile'
                />
            </CardActionArea>
        </CardUI>
    )
}
