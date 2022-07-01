import styled from "styled-components";

export const HomeContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #d2d4d3;

`;

export const Title = styled.h1`
    font-size: 40px;
    color: #333;
    text-align: center;


`;


export const Content = styled.div`
    width: 50%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    

    padding: 2%;
    background-color: white;
    border-radius: 10px;
    @media (max-width: 768px) {
        height: 100vh;
        width: 100%;
    }
`;
export const Button = styled.button`
    font-size: 16px;
    height: 120px;
    width: 200px;
    line-height: 18px;
    color: white;
    cursor: pointer;
    background-color: #0DBDBD;
    border-radius: 10px;
    transition: 200ms;
    outline: none;
    border: none;
    &:hover {
        background-color: #0ba3a3;
    }
    &:active {
        background-color: #0DBDBD;
    }
    

`;



export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 100%;
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    margin-top: 10%;
    `;


