import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import tmdbAPI, { baseImgURL } from '../../services/api'

import { Container, BackdropImg, CardContent, MovieInfo, MenuMovie, DetailsMenu, Genres, SimilarMenu, GalleryMenu } from './styles'

function Details() {
    const { id } = useParams()
    const [data, setData] = useState()
    const [option, setOption] = useState('details')

    useEffect(() => {
        tmdbAPI
        .get(`movie/${id}`, 
        { params: { append_to_response: 'videos,similar' }
        })
        .then(res =>
            setData(res.data)
        )
        .catch(err =>
            console.log(err)    
        )
    }, [id])

    data && console.debug(data)

    function parseDate(date) {    
        return `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`
    }

    function translateStatus(status) {
        if (status==='Rumored') {
            return 'Rumor';
        } else if (status==='Planned') {
            return 'Planejado';
        } else if (status==='In Production') {
            return 'Em produção';
        } else if (status==='Post Production') {
            return 'Pós produção';
        } else if (status==='Released') {
            return 'Lançado';
        } else if (status==='Canceled') {
            return 'Cancelado';
        } 
        return status;
    }

    function renderContentBasedOnOption() {
        if (option==='similar') {
            return (
                <SimilarMenu>
                    {
                        data.similar.results.map(title => (
                            <Link to={`/details/${title.id}`}>
                                <img src={`${baseImgURL}w154${title.poster_path}`} alt={`${title.title}`}/>
                            </Link>
                        ))
                    }
                </SimilarMenu>
            )
        } else if (option==='gallery') {
            return (
                <GalleryMenu>
                    {
                        data.videos.results.length > 0 ? 
                        <>
                            {
                                data.videos.results.map(video => (     
                                    <div className='video'>
                                        <span>{video.type}</span>  
                                        <iframe 
                                            key={video.key}
                                            title={video.type} 
                                            src={`https://www.youtube.com/embed/${video.key}`} 
                                                        allowFullScreen
                                        />
                                    </div>
                                ))
                            }
                        </>
                        : <span>Nenhum vídeo disponível</span>
                    }
                </GalleryMenu>
            )
        }
        return (
            <DetailsMenu>
                {
                    data.runtime !== 0 && <span>Duração: {data.runtime} min</span>
                }
                <span>Data de lançamento: {parseDate(data.release_date)}</span>
                {
                    data.budget !== 0 && <span>Orçamento: {new Intl.NumberFormat('us', 
                    { style: 'currency', currency: 'USD'}).format(data.budget) }</span>
                }
                <span>Status: {translateStatus(data.status)}</span>
                <span>Acesse a página do filme clicando <a href={data.homepage} target='_blank' rel="noreferrer">aqui</a></span>
            </DetailsMenu>
        )
    }

    return (
        <>
            {
                data &&
                <Container>
                    <BackdropImg src={`${baseImgURL}original${data.backdrop_path}`} alt={`${data.title}`} />
                    <CardContent>
                        <img src={`${baseImgURL}w185${data.poster_path}`} alt={`${data.title}`}/>
                        <MovieInfo>
                            <h3>{data.title}</h3>
                            <p>{data.overview}</p>
                            <Genres>
                                {
                                    data.genres.map(genre => 
                                        <li key={genre.id}>
                                            {genre.name}
                                        </li>    
                                    )
                                }
                            </Genres>
                        </MovieInfo>
                    </CardContent>

                    <MenuMovie>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <button onClick={() => setOption('details')} className={option === 'details' ? 'selected' : ''}>
                                Detalhes
                            </button>
                            <button onClick={() => setOption('gallery')} className={option === 'gallery' ? 'selected' : ''}>
                                Galeria
                            </button>
                            <button onClick={() => setOption('similar')} className={option === 'similar' ? 'selected' : ''}>
                                Ver similares
                            </button>
                        </div>

                        <>
                            { renderContentBasedOnOption() }
                        </>
                    </MenuMovie>
                </Container>
            }
        </>
    )
}

export default Details
