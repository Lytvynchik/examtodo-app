import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../scss/TodoForm.scss'
import { addTodo, handleTitle, handleDate } from '../../store/todoSlice';
import TodoList from '../TodoList/TodoList';
const TodoForm = () => {
    // Отслеживаем state radio buttons 
    const [checked, setChecked] = useState(true);
    // Изменяем state radio buttons при переключении
    const chooseRadio = () => {
        setChecked(!checked)
    };

    // Отслеживаем state инпутов
    const [taskDate, setTaskDate] = useState('2022-07-14');
    const [taskTitle, setTaskTitle] = useState('');
    
    const handleChnage = (e) => {
        const {name, value} = e.target;
        if (name === 'date') {
            dispatch(handleTitle( {taskDate} ));
            setTaskDate(value)
        }
        else if( name === 'title') {
            dispatch(handleTitle( {taskTitle} ));
            setTaskTitle(value)
        }
    }

    const date = useSelector(state => state.todos.date);
    const title = useSelector(state => state.todos.title);


    // Изменяем state инпутов по условию
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     name === 'date' ? setTaskDate(value) : setTaskTitle(value);
    // }

    // const handleInput = () => {
    //     dispatch( handleChange( title.payload ));
    // }

    // Добавляет туду
    const [newTodo, setNewTodo] = useState('Add task');
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addTodo({ newTodo }));
        setNewTodo('Add task');
    };

    return (
        <form id='form' className="TodoForm" >

            <div className='TodoForm__radio'>
                <label className='TodoForm__radio__label'>
                    <input className='TodoForm__radio__label__input' onChange={chooseRadio} type="radio" name="check" defaultChecked="checked" />On date
                </label>
                <label className='TodoForm__radio__label'>
                    <input className='TodoForm__radio__label__input' onChange={chooseRadio} type="radio" name="check" />No limit
                </label>
            </div>

            {
                checked ?
                    <div className='TodoForm__list'>
                        <label className='TodoForm__list__date' htmlFor="date">
                            Select date
                            <input type="date" id='date' name='date' min="2022-14-07" max="2030-00-01" value={taskDate} onChange={handleChnage} />
                        </label>

                        <label className='TodoForm__list__name' >
                            List name
                            <input type="text" name='title' placeholder='Name List' value={taskTitle} onChange={handleChnage} />
                        </label>
                        <TodoList />

                    </div> :

                    <div className='TodoForm__list'>
                        <label className='TodoForm__list__name' >
                            List name
                            <input type="text" name='title' placeholder='Name List' value={taskTitle} onChange={handleChnage} />
                        </label>
                        <TodoList />
                    </div>
            }

            <button type='button' className='TodoForm__list__btn' onClick={addTask}>
                <span></span>
                Add line
            </button>
        </form>
    );
};

export default TodoForm;