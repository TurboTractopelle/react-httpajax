import React from 'react';
import Todo from './Todo/Todo'

const Todos =(props)=> {

return (
        <div>
            {props.todos.map((t)=><Todo id={t.id} title={t.title} completed={t.completed} />)}
        </div>
    );
}

export default Todos;