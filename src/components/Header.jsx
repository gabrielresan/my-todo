import React, { useContext, useState } from 'react';
import {FaCheck} from 'react-icons/fa';
import { TodoListContext } from '../contexts/TodoListContext';
import '../styles/Header.css'

const Header = () => {
  const { taskTitle, setTaskTitle, handleCreateNewTask } = useContext(TodoListContext);

  return (
      <header className="main-header">
        <div className="header-content">
          <h1>MyToDo</h1>

          <form className="">
            <input 
              type="text"
              className="input"
              value={taskTitle}
              onChange= {(event) => { setTaskTitle(event.target.value) }}
            />

            <button 
              type="button"
              className="btn-add-task"
              onClick = {handleCreateNewTask}
            >
                <FaCheck />
            </button>
          </form>
        </div>
      </header>
  )
}

export default Header;