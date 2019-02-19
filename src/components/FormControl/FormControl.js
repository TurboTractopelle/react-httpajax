import React from 'react';
import Input from './Input/Input'

const FormControl =(props)=> {
return (
        <div className="formcontrol">
            <Input action={props.filterByUserIdHandler}>Filter by UserID:</Input>
        </div>
    );
}

export default FormControl;