import React from 'react';
import Input from './Input/Input'

const FormControl =(props)=> {
return (
        <div className="formcontrol">
            <Input action={props.filterByUserIdHandler}>Filter by todo id:</Input>
        </div>
    );
}

export default FormControl;