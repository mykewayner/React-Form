import React from "react";
import './index.css'

const Checkbox = ({options, value, setValue}) => {

    function handleChange({target}) {
        if(target.checked) {
            setValue([...value, target.value]);
        } else {
            setValue(value.filter(item => item !== target.value));
        }
    }

    return (
    
    <>
    {options.map((option) => (
    
        <label className="container" key={option}>
            <input type="checkbox" value={options} checked={value.includes(option)} onChange={handleChange} required={true} />
            <span className="checkmark"></span>
            {option},
        </label>
    ))}

    </>
    )
    

}

export default Checkbox;