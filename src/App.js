import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

const todos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:true},
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  return (
    <>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(item => (
          <TodoItem key={item.text} text={item.text} completed={item.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />

    </>
  );
}

export default App;
