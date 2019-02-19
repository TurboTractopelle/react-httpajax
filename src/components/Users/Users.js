import React from 'react';
import Todos from '../Todos/Todos'

const Users =(props)=> {

return (
        <div>
            {Object.keys(props.users).map((i,k)=> <Todos todos={props.users[i]} userid={i} key={k} /> )}
        </div>
    );
}

export default Users;