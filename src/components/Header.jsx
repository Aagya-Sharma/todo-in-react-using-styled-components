import { FaPlus } from 'react-icons/fa';
import {Title} from './Header.style'
import {Form,Input} from '../components/form.style'

const Header = ({newTask,setNewTask,setDesc,handleSubmit,setSearch,desc})=>{
   return <>
     <Title>
        <Form className='searchForm' >
           <Input type ="text" autoFocus id="search" placeholder='Search' required onChange={e=> setSearch(e.target.value)}></Input>
        </Form>
      </Title>
      <Form onSubmit={handleSubmit} className ='addForm'>
           <Input type ="text"  id="addtask" placeholder='Add todos' required value={newTask} onChange={e=> setNewTask(e.target.value)}></Input>
           <Input type ="text"  id="adddesc" placeholder='Add description' required  value={desc} onChange={e=> setDesc(e.target.value)}></Input>
           <button type="submit"><FaPlus/></button>
      </Form> 
   </>
}

export default Header