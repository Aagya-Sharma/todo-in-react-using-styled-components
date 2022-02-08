import React from 'react';
import {List} from '../components/List.style'
import {ListItems} from '../components/ListItems.style'
import { FaTrashAlt } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { FaRegCheckSquare } from 'react-icons/fa';

const Index = ({todos,handleDelete,handleCheck}) => {
  return <div>
      {todos.map((todo)=> (
      <>
      <p>{todo.date}</p>
            <List>
                  <FaAngleRight/>
                  <ListItems><FaRegCheckSquare onClick={()=>handleCheck(todo.id)}/></ListItems>
                  <ListItems  style={(todo.checked) ? { textDecoration: 'line-through' } : null}>{todo.newTask}</ListItems>
                  <ListItems  style={(todo.checked) ? { textDecoration: 'line-through' } : null}>{todo.desc}</ListItems>
                  <ListItems>
                  <FaTrashAlt
                        onClick={() => handleDelete(todo.id)}
                        role="button"
                        tabIndex="0"
                  />
                  </ListItems>
            </List>
      </>
      ))}
      </div>
};

export default Index;
