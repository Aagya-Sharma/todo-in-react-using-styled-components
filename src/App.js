import Index from './pages/Index';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header'


function App() {
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [newTask,setNewTask] = useState('')
  const [desc,setDesc] =useState('')
  const [search,setSearch] =useState('')

  //to add the todos to the localstorage
  const handleSubmit = (e)=>{
    e.preventDefault();
    let today = new Date()
    const monthNames =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Nov','Dec']
    const id = todos.length?todos[todos.length-1].id+1:1;
    const addtodo = {id,checked:false,newTask,desc,date:today.getDate() + ' '+  monthNames[today.getMonth()] + ' '+  today.getFullYear()}
    const listtodos = [...todos,addtodo]
    setTodos(listtodos);
    setNewTask('')
    setDesc('')
    console.log(listtodos)
    localStorage.setItem('todos',JSON.stringify(listtodos));
  }

  //to delete the todos
  const handleDelete =(id)=>{
    console.log(id)
    const filteredTodos = todos.filter((todo)=> todo.id !==id )
    setTodos(filteredTodos);
    localStorage.setItem('todos',JSON.stringify(filteredTodos));
  }
  //to check a todo
  const handleCheck = (id)=>{
    const checkedTodos = todos.map((todo)=> todo.id ===id ? {...todo,checked:!todo.checked} : todo);
    setTodos(checkedTodos);
    localStorage.setItem('todos',JSON.stringify(checkedTodos));
  }
  return (
    <>
      <Header 
        setNewTask = {setNewTask}
        handleSubmit ={handleSubmit}
        setDesc = {setDesc}
        newTask ={newTask}
        setSearch = {setSearch}
        desc = {desc}
      />
      <Index newTask = {newTask} 
        todos= { todos.filter(todo=>((todo.newTask)).toLowerCase().includes(search.toLowerCase()))}
        handleDelete = {handleDelete}
        handleCheck ={handleCheck}
      />
    </>
  );
}

export default App;
