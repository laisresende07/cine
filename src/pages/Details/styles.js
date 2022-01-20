import styled from 'styled-components'

export const Container = styled.div `
    padding: 24px;
    border-radius: 10px;
    margin: 24px auto;
    max-width: 700px;
    position: relative;
`

export const BackdropImg = styled.img `
    filter: grayscale(40%) opacity(75%);
    -webkit-mask-image: linear-gradient(180deg,#000,transparent);
    mask-image: linear-gradient(180deg,#000,transparent);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 10px;
    z-index: -1;
`;

export const CardContent = styled.div `
    display: flex;
    z-index: 1;

    img {
        border-radius: 10px;
        -webkit-box-shadow: 3px 3px 15px 5px rgba(0,0,0,0.6); 
        box-shadow: 3px 3px 15px 5px rgba(0,0,0,0.6);   
        height: min-content;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;

        img {
            width: 50%;
        }
    }
`

export const MovieInfo = styled.div `
    flex: 3 1;
    margin-left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
        margin: 10px 0;
        font-weight: 600;
    }

    p {
        font-size: 14px;
        text-align: justify;
        margin: 0;
    }

    @media (max-width: 500px) {
        margin-left: 0;
        margin-top: 32px;
    }
`

export const MenuMovie = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    button {
        background: none;
        border: none;
        font-size: 16px;
        border: 1px solid;
        color: unset;
        border-radius: 10px;
        padding: 10px;
        flex: 1;
        cursor: pointer;
        transition: 0.7s;

        & + button {
            margin-left: 32px;

            @media (max-width: 500px) {
                margin-left: 10px;
            }
        }

        &:hover, &:focus, &:active {
            -webkit-box-shadow: 1px 4px 6px 1px rgba(0,0,0,0.15); 
            box-shadow: 1px 4px 6px 1px rgba(0,0,0,0.15); 
            
        }

        &.selected {
            color: #d11111;
        }
    }
`

export const DetailsMenu = styled.div `
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    font-size: 14px;
    line-height: 150%;

    a {
        text-decoration: none;
        color: #d11111;
        font-weight: 600;
    }
`

export const Genres = styled.ul `
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        padding: 0;
        margin-left: -5px;

    li {
        background-color: ${({ theme }) => theme.genreTagColor};
        list-style: none;
        margin: 5px;
        padding: 7px 10px;
        border-radius: 6px;
    }
`

export const SimilarMenu = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;

    a {
        border-radius: 10px;
        width: 20%;
        display: flex;
        justify-content: center;
        margin: 7px 0;
        transition: 0.7s;

        img {
            border-radius: 10px;
            width: 90%;
        }

        &:hover img {
            -webkit-box-shadow: 3px 2px 12px 4px rgba(0,0,0,0.5); 
            box-shadow: 3px 2px 12px 4px rgba(0,0,0,0.5); 
        }
    }

    @media (max-width: 500px) {
        justify-content: space-between;
        
        a {
            width: 30%;

            img {
                width: 98%
            }
        }
    }
`

export const GalleryMenu = styled.section ` 
    display: flex;
    justify-content: center;
    margin: 32px -2.5% 0;
    flex-wrap: wrap;

    .video {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 2.5% 20px;
        width: 45%;
        aspect-ratio: 6/4;

        span {
            margin-bottom: 10px;
        }

        iframe {
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 500px) {
        margin: 32px 0 0;
        flex-direction: column;

        .video {
            margin: 10px 0 20px;
            width: 100%;

            span {
                margin-bottom: 10px;
            }

            iframe {
                width: 100%;
                height: 100%;
            }
        }
    }
`
