import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Dashboard from './components/UI/button/Dashboard/Dashboard';
import AllTodo from './pages/AllTodo';
import CreateNewList from './pages/CreateNewList';
import TaskLists from './pages/TaskLists';

// import { Context }

function App() {

	// const [taskList, setTaskList] = useState([]);

	// const saveTask = (taskObj) => {
	// 	let tempList = taskList;
	// 	tempList.push(taskObj);
	// 	setTaskList(tempList);
	// 	console.log(setTaskList(tempList));
	// }

	return (

			<div className="App">
				<Routes>
					<Route path="/" element={
						<Header>
							<Dashboard />
						</Header>} />

					<Route path="create" element={
						<Header>
							<CreateNewList/>
						</Header>
					} />

					<Route path='alltodo' element={
						<Header>
							<Dashboard />
							<AllTodo />
						</Header>
					} />
				</Routes>
			</div>
	);
}

export default App;
