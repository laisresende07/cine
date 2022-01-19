import styled from 'styled-components';

export const Container = styled.footer `
    background: ${({ theme }) => theme.footerBackgroundColor};
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: 10px;
    justify-content: space-between;
    margin: 24px 0 8px;
    span {
        font-size: 12px;
    }
    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }
`;