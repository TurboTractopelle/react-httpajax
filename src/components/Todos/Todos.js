import React from 'react';
import Todo from './Todo/Todo'

const Todos =(props)=> {

console.log(props)

return (
        <div className="user">
            <h2>{props.userid}</h2>
            {props.todos.map((t)=><Todo id={t.id} title={t.title} key={t.id} />)}
        </div>
    );
}

export default Todos;