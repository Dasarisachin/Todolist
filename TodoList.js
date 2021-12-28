import React from 'react'

const TodoList = ({ todoList, deleteHandler }) => {
    return (
        <div>
            {todoList.map((todos, index) =>
                <div key={index}>
                    <h5>{todos} &nbsp;<button onClick={() => deleteHandler(index)}>Delete</button></h5>
                </div>)}
        </div>
    )
}

export default TodoList
