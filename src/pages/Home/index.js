import React from 'react'

import movienight from '../../assets/movienight.svg'
import { Container } from './style'

function Home() {
    return ( 
        <Container>
            <div>
                <h1>cine</h1>
                <h2 style={{fontWeight: 500}}>
                    Aqui você encontra informações sobre filmes e séries do momento
                </h2>
            </div>
            <img alt={'movie night'} src={movienight} />
        </Container>
    )
}

export default Home