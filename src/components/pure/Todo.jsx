import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, id, onDelete }) => {
    return (
        <li
        style={
            {
                textDecoration: completed ? 'line-through': 'none',
                textDecorationColor: completed ? 'green' : 'none',
                color: completed ? 'green' : 'white'  
            } 
        }>
           <span onClick={onClick} >{id} - {text}</span>
           <button onClick={onDelete}>Delete</button>
        </li>
    );
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;
