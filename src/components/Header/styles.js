import styled from 'styled-components';

export const Container = styled.header `
    background: ${({ theme }) => theme.headerBackgroundColor};
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: 10px;
    justify-content: space-between;
    div {
        display: flex;
        align-items: center;

        a + a {
            text-decoration: none;
            color: ${({ theme }) => theme.textColor};
            margin-left: 20px;

            &:hover {
                color: ${({ theme }) => theme.red}
            }
        }
    }
    button {
        font-size: 16px;
        cursor: pointer;
        cursor: pointer;
        background: transparent;
        border: none;
    }
`;