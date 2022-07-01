import React from "react";
import { useNavigate } from "react-router-dom";
import {Title, Div, HomeContainer, Content, Button } from "./styles";

export function Success() {  
    const navigate = useNavigate();
    
    function handleClick() {
        navigate("/");
    }

    return (
        <HomeContainer> 
            <Content>
                <div>
                <img src="src/Assets/internImg.png" />
                <Title>Success!</Title>
                </div>
                <Button onClick={handleClick}>Go back</Button>
            </Content>
        </HomeContainer>
    )
  }
  
  