import React from 'react';

const Input =(props)=> {
return (
        <div className="selector">
            <label><span>{props.children}</span><input type="text" onChange={props.action}/></label>
        </div>
    );
}

export default Input;