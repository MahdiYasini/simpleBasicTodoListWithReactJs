import React from 'react';
import './todo.css'
const Todo = (props) => {
    return (
        <table id="todo">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Information</th>
                </tr>
            </thead>
            <tbody>
                {props.todoList.map((todo, index) => {
                    return <tr>
                        <td>{index}</td>
                        <td>{todo}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
export default Todo

