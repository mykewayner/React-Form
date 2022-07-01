//import './styles.css'
import React from 'react'
import { InputDiv, InputStyle, Label, Errormsg } from './styles'

export function Input({ label, id, type, value, onChange, onBlur, placeholder, error, width }) {

    return(
        
  
        <InputDiv width={width} >
            <Label htmlFor={id}>{label}</Label>
            <InputStyle
            width={width}
            type={type} 
            name={id} 
            id={id} 
            value={value} 
            onChange={onChange}
            placeholder={placeholder}

            onBlur={onBlur}></InputStyle>
            {error && <Errormsg>{error}</Errormsg>} 
        
        </InputDiv>
   
    )



}