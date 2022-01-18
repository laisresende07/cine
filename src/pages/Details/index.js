import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbAPI from '../../services/api'

function Details() {
    const { id } = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        tmdbAPI
        .get(`movie/${id}`)
        .then(res =>
            setData(res.data)
        )
        .catch(err =>
            console.log(err)    
        )
    }, [id])

    console.log(data)

    return (
        <>
            {
                data &&
                <>
                    <p>{data.title}</p>
                    <p>{data.overview}</p>
                    <p>{data.runtime}</p>
                    <p>{data.status}</p>
                    {
                        data.genres.map(genre => 
                            <div key={genre.id} style={{display: 'inline-block', marginRight: 15}}>
                                {genre.name}
                            </div>    
                        )
                    }
                </>
            }
        </>
    )
}

export default Details
