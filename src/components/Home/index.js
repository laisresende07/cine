import React, { useEffect, useState } from 'react'
import tmdbAPI from '../../services/api'
import Card from '../Card'

function Home() {
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
console.log(data)
    return ( 
        <ul style={{padding: 0}}>
            {
                data &&
                data.map(movie => 
                    <Card key={movie.id} movie={movie} />
                )
            }
        </ul>
    )
}

export default Home