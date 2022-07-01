import styled from "styled-components";

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5px;
    width: ${(props) => props.width};
    @media (max-width: 768px) {
        width: 100%;
    }
    

  
`;
export const Errormsg = styled.p`
    color: #FF4B4B;
    position: absolute;
    margin-top: 60px;

  
`;


export const InputStyle = styled.input`
    font-size: 16px;
    border: 2px solid #AAAAAA;
    border-radius: 5px;
    height: 36px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 1%;
    width: 100%;

    @media (max-width: 768px) {
        width: 98%;
        margin-bottom: 10%;
        margin-right: 10px;

    }


    

       
`;
export const Label = styled.label`
    font-size: 14px;    
    color: #333;
`

