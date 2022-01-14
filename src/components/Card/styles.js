import styled from 'styled-components'

export const Container = styled.li `
    display: flex;
    align-items: center;
    padding: 24px;
    border-radius: 10px;
    justify-content: space-between;
    position: relative;
    max-width: 500px;
    margin: 24px auto 0;
    background-color: #000;
    color: #fff;
    overflow: hidden;
`

export const BackdropImg = styled.div `
    background-image: url(${({backgroundImage}) => backgroundImage});
    filter: blur(1.5px) grayscale(30%) opacity(40%);
    -webkit-filter: blur(1.5px) grayscale(30%) opacity(40%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const CardContent = styled.div `
    display: flex;
    z-index: 1;
    img {
        border-radius: 10px;
    }
`

export const MovieInfo = styled.div `
    flex: 3 1;
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
        margin: 10px 0;
        font-weight: 500;
    }

    p {
        font-size: 14px;
        text-align: justify;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`