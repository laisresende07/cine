import styled from 'styled-components'

export const Container = styled.div `
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    max-width: 800px;
    margin: 15px auto 0;

    h1 {
        color: ${({ theme }) => theme.red}
    }

    img {
        width: 65%;
        transform: scaleX(-1);
    }

    @media (max-width: 500px) {
        flex-direction: column;
        padding: 0 30px;
        
        img {
            width: 120%;
        }
    }
`
