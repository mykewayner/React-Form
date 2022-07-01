import React from "react";
import TableDatePicker from "../../components/DatePicker";
import { useState } from "react";
import useForm from '../../utils/hooks/useForm';
import { Input } from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import {Title, Div, Bottom, HomeContainer, Content, Header } from "./styles";

export function Home() {
    const name = useForm("name");
    const email = useForm("email");
    const phone = useForm("phone");
    const password = useForm("password");
    const [terms, setTerms] = useState([]);
    const navigate = useNavigate();
    

    function handleSubmit(event) {
        event.preventDefault();
        if(name.value && email.value && phone.value && password.value) {
            navigate("/sucess");
        } else {
            console.log("Preencha todos os campos");
        }
    }
  
    return (
        <HomeContainer>        
            <Content>
                <Header>
                    <img src="src/Assets/internImg.png" />
                    <Title>Intern Sing Up</Title>
                </Header>
                <form onSubmit={handleSubmit}>
                    <Div>
                        <Input label="Full Name *" placeholder="Full Name" id="name" type="text" width="100%" {...name} />
                    </Div>
                    <Div>
                        <Input label="Email *" placeholder="email@domain.com" id="email" type="email" width="65%" {...email} />
                        <Input label="Phone *" placeholder="(00) 00000-0000" id="phone" type="tel" width="30%" {...phone} />
                    </Div>
                    <Div> 
                        <Input label="Password *" id="password" type="password" width="65%" {...password} />
                        <TableDatePicker></TableDatePicker>
                    </Div>
                    <Bottom>
                        <Checkbox options={['I accept the terms and privacy']} value={terms} setValue={setTerms}  />
                        <Button value="Register" />
                    </Bottom>
                </form>
            </Content>          
        </HomeContainer>
    )
  }
  
  