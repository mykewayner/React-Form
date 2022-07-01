import styled from "styled-components";

export const HomeContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #d2d4d3;
    overflow: hidden;
    
    


`;

export const Header = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        margin-top: 10%;
        margin-bottom: 5%;
    }
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #333;
    text-align: center;


`;


export const Content = styled.div`
    width: 50%;
    height: 80vh;
    padding: 2%;
    background-color: white;
    border-radius: 10px;
    @media (max-width: 768px) {
        height: 100vh;
        width: 100%;
    }
`;




export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
    
    }

`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    margin-top: 10%;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
    }
    `;


