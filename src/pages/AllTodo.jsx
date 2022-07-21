import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../scss/AllTodo.scss';

const AllTodo = () => {
    const todos = useSelector(state => state.todos.todos);
    const title = useSelector(state => state.todos.title);
    const date = useSelector(state => state.todos.date);
    console.log(title);
    console.log(date);
    
    // console.log(taskList);
    return (
        <div>
            {
                todos.map((todo) => {
                    console.log(todo);
                    return <div className='AllTodo' key={todo.id}>
                        <div className='AllTodo__container'>
                            <div className="AllTodo__container__taskname">
                                <h3>{title}</h3>
                                <span>{date}</span>
                            </div>
                            <div className="AllTodo__container__tasklist">
                                <div>
                                    {todo.text}
                                    <input type="checkbox" id='check' />
                                    <label htmlFor="check">{todo.id}</label>
                                </div>
                            </div>
                            <div className='AllTodo__container__btns'>
                                <button>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25H4.5V14.25ZM14.25 3H11.625L10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3Z" fill="white" />
                                    </svg>
                                </button>
                                <button>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 12.9375V15.75H5.0625L13.3575 7.455L10.545 4.6425L2.25 12.9375ZM15.5325 5.28C15.825 4.9875 15.825 4.515 15.5325 4.2225L13.7775 2.4675C13.485 2.175 13.0125 2.175 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    );
};

export default AllTodo;