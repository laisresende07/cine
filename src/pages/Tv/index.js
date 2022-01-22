import React, { useEffect, useState } from 'react'
import tmdbAPI from '../../services/api'
import Card from '../../components/Card'

function Tv() {
    const [data, setData] = useState([])

    useEffect(() => {
        tmdbAPI
        .get('/tv/popular')
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
                data.map(tv => 
                    <Card 
                        key={tv.id} 
                        id={tv.id}
                        type={'tv'}
                        title={tv.name} 
                        backdropImg={tv.backdrop_path} 
                        poster={tv.poster_path}
                        overview={tv.overview}
                    />
                )
            }
        </ul>
    )
}

export default Tv