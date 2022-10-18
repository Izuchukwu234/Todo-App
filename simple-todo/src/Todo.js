import React from 'react'

export const Todo = ({ input, setInput, todo, setTodo }) => {

    const changeHandler = (event) => {
        setInput(event.target.value)
    }

    const addTodo = (todos) => {
        if(todos !== ""){
            const newTodo = {
                id: Math.random(),
                todos: todos,
                completed: false
            }
            setTodo([...todo, newTodo])
            setInput("")
        } else{
            return null
        }
    }

    const deleteTodo = (id) => {
        const newTodo = todo.filter((item) => item.id !== id)
        setTodo(newTodo)
    }

    return (
        <div>
            <section className="vh-100 bg-color">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">

                            <div className="card bord-rad">
                                <div className="card-body p-5">

                                    <h2 className="mb-3">My Todo List</h2>

                                    <div className="d-flex justify-content-center align-items-center mb-4">
                                        <div className="form-outline flex-fill">
                                            <input id="editInput" className="form-control form-control-lg" type="text" value={input} placeholder="Enter your list" onChange={changeHandler} />
                                            <label className="form-label" htmlFor="form3">What do you need to do today?</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg ms-2 mb-4" onClick={() => addTodo(input)}>Add</button>
                                    </div>

                                    <ul>
                                        {
                                            todo.map((item) => (
                                                <li
                                                    className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2" key={item.id}>
                                                    <div className="d-flex align-items-center">
                                                        <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                        {item.todos}
                                                    </div>
                                                    <i onClick={() => deleteTodo(item.id)} className="bi bi-trash"></i>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}