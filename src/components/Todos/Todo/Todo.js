import React from 'react';


const Todo =(props)=> {
return (
        <div className="todo">
            <p>id: {props.id}</p>
            <p>title: {props.title}</p>
            <p>completed: {props.completed}</p>
        </div>
    );
}

export default Todo;