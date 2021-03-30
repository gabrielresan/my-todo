import React, { createContext, useEffect, useState } from 'react';
import { IoTerminal } from 'react-icons/io5';

export const TodoListContext = createContext({});

const TodoListProvider = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('lista-de-tarefas');

    if (minhaLista) {
      setListaDeTarefas(JSON.parse(minhaLista));
    }
  }, [])

  // Função será chamada quando usuário clicar no botão de adicionar a tarefa
  const handleCreateNewTask = () => {
    setListaDeTarefas([...listaDeTarefas, taskTitle]);
    
    localStorage.setItem('lista-de-tarefas', JSON.stringify([...listaDeTarefas, taskTitle]));

    setTaskTitle("");
  }

  const handleRemoveTask = (element) => {
    const novaListaDeTarefas = listaDeTarefas.filter((item, index) => {
      return index != element;
    })

    localStorage.setItem('lista-de-tarefas', JSON.stringify(novaListaDeTarefas));

    setListaDeTarefas(novaListaDeTarefas);
  }


  return (
    <TodoListContext.Provider value={ {
      taskTitle,
      setTaskTitle,
      handleCreateNewTask,
      listaDeTarefas,
      handleRemoveTask,
    } }>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListProvider;
