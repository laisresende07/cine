import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgURL } from '../../services/api'
import { Container, BackdropImg, CardContent, MovieInfo } from './styles'

function Card({ id, backdropImg, poster, title, overview, type }) {
    return (
        <Link to={`/${type}/${id}`} style={{textDecoration: 'none'}}>
            <Container>
                <BackdropImg backgroundImage={`${baseImgURL}w500${backdropImg}`} alt={`${title}`} />
                <CardContent>
                    <img src={`${baseImgURL}w154${poster}`} alt={`${title}`}/>
                    <MovieInfo>
                        <h3>{title}</h3>
                        <p>{overview || 'Sem resumo disponível.'}</p>
                    </MovieInfo>
                </CardContent>
            </Container>
        </Link>
    )
}

export default Card
