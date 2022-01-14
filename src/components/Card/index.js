import React from 'react'
import { baseImgURL } from '../../services/api'
import { Container, BackdropImg, CardContent, MovieInfo } from './styles'

function Card({ movie }) {
    return (
        <Container>
            <BackdropImg backgroundImage={`${baseImgURL}w500${movie.backdrop_path}`} alt={`${movie.title}`} />
            <CardContent>
                <img src={`${baseImgURL}w154${movie.poster_path}`} alt={`${movie.title}`}/>
                <MovieInfo>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </MovieInfo>
            </CardContent>
        </Container>
    )
}

export default Card
