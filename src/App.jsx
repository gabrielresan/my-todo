import TasksList from './components/TasksList';
import Header from './components/Header';
import './styles/global.css';
import TodoListProvider from './contexts/TodoListContext';


function App() {
  return (
    <TodoListProvider>
      <Header />
      <TasksList />
    </TodoListProvider>
  )
}

export default App;