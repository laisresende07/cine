import React, { useEffect, useState } from 'react'
import tmdbAPI from '../../services/api'
import Card from '../../components/Card'

function Movies() {
    const [data, setData] = useState([])

    useEffect(() => {
        tmdbAPI
        .get('/movie/popular')
        .then(res =>
            setData(res.data.results)
        )
        .catch(err =>
            console.log(err)    
        )
    }, [])

    data.length > 0 && console.debug(data)

    return ( 
        <ul style={{padding: 0}}>
            {
                data &&
                data.map(movie => 
                    <Card 
                        key={movie.id} 
                        id={movie.id}
                        type={'movie'}
                        title={movie.title} 
                        backdropImg={movie.backdrop_path} 
                        poster={movie.poster_path}
                        overview={movie.overview}
                    />
                )
            }
        </ul>
    )
}

export default Movies