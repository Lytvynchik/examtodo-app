import { Link } from 'react-router-dom';
import TodoForm from '../components/TodoForm/TodoForm';
import '../scss/CreateNewList.scss'
const CreateNewList = ( { saveTask, taskList, setTaskList} ) => {

    // const [taskList, setTaskList] = useState([]);

    // const handleSave = () => {
	// 	let taskObj = {};
	// 	taskObj["Name"] = taskList;
	// 	taskObj["Name"] = taskList;
	// 	// saveTask(taskObj)
	// 	console.log(saveTask(taskObj));
	// }

    return (
        <div className='CreateNewList'>
            <div className='CreateNewList__container'>
                <h3 className='CreateNewList__container__title'>Create new list</h3>
                <div className='CreateNewList__container__btn'>
                    <Link to="/">Cancel</Link>
                    <Link 
                        to="/alltodo" 
                        // onClick={handleSave}
                    >Create</Link>
                </div>
            </div>
            <TodoForm 
                // taskList={taskList}
                // setTaskList={setTaskList}
            />
        </div>
    );
};

export default CreateNewList;