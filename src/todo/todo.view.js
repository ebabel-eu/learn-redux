// Third party dependencies.
import React from 'react';

// Internal dependencies.
import Todo from './todo.model.js';
import './todo.css';

// Todo component.
class Todo extends React.Component {

    render() {
        const todo = new Todo();
        const lis = [];

        todo.tasks.forEach(task => {
            lis.push(<li>{task}</li>)
        }.bind(this));

        return (
            <ul>{lis}</ul>
        )
    }

}

ReactDOM.render(<Todo />, document.getElementById('todo'));
