import React from "react";

const types = {
    phone: {
        regex: /^[0-9]{11}$/,
        message: 'Phone Invalid'
    },
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/,
        message: 'Email Invalid'
    },
    password: {
        regex: /^([0-9]){6,8}$/,
        message: 'Password Invalid'
    },
    name: {
        regex: /^[\s a-z A-Z]{4,}$/,
        message: 'Name Invalid'
    }

}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {
        if (value.length === 0) {
            setError(types[type].message);
            return false;
        } else if (types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
       
    }

    function onChange({target}) {
        if (error) validate (target.value);
        setValue(target.value);
    }

    return{
        value,
        setValue,
        error,
        onBlur : () => validate(value),
        onChange,

    }
        
        
    
        
        
    
}

export default useForm;