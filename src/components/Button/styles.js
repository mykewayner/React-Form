import styled from "styled-components";

export const ButtonStyle = styled.button`
    font-size: 16px;
    height: 40px;
    width: 81px;
    line-height: 18px;
    color: white;
    cursor: pointer;
    background-color: #0DBDBD;
    border-radius: 10px;
    transition: 200ms;
    outline: none;
    border: none;
    @media (max-width: 768px) {
        width: 90%;
    }
    &:hover {
        background-color: #0ba3a3;
    }
    &:active {
        background-color: #0DBDBD;
    }
    
    

`;
