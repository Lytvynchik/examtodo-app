import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../scss/TodoList.scss';
import { removeTodo } from '../../store/todoSlice';

const TodoList = () => {
    // Получаем начальный state из redux store с помощью useSelector
    const todos = useSelector(state => state.todos.todos);
    // Отслеживаем state тудушек 
    const [text, setText] = useState('');
    // Подключаем диспетчера 
    const dispatch = useDispatch();

    return (
        <ul className="TodoList">
            {
                todos.map(todo => {
                    return <li className="TodoList__item" key={todo.id}>
                        <div className="TodoList__item__block">
                            <div className='TodoList__item__block__items'>
                                <span></span>
                                <input type="text" value={text} placeholder={todo.text} onChange={e => setText(e.target.value)} />
                            </div>
                        </div>
                        <div className='TodoList__item__block__btn'>
                            <button onClick={(e) => dispatch(removeTodo({id: todo.id}, console.log(todo.id)))}> 
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25H4.5V14.25ZM14.25 3H11.625L10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </li>
                })
            }
        </ul>
    );
};

export default TodoList;