import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

const defaultTodos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:true},
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  // declaramos el estado para ver lo escrito en el input desde aqui,
  // para luego enviar como parametro a la etiqueta [TodoSearch]
  const [searchValue, setSearchValue] = React.useState('');

  // declaramos estado [todos] que por defecto contrendra el array previamente creada
  const [todos, setTodos] = React.useState(defaultTodos);

  // obtiene el numero de items del [todo] que fueron completados(true)
  const completedTodos = todos.filter(item => item.completed === true).length;

  // numero total de items en el [todo]
  const totalTodos = todos.length;

  // variable vacia que contendra el item del array [todos] segun lo escrito en el input
  let searchedTodos = [];

  if (searchValue.length === 0) {
    // en caso de que aun no se escriba nada, se mostrara el array [defaultTodos]
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(item => {
      const todoText = item.text.toLocaleLowerCase(); // convierte a minuscula cada item [text] del array [todos]
      const searchText = searchValue.toLocaleLowerCase(); // convierte a minuscula cada letra escriba en el input
      return todoText.includes(searchText); // compara 1 valor texto con otro, y si algun [text] contiene lo que se va escriiendo en el input, retorna el array de ese item
    })
    console.log("searchedTodos:", searchedTodos) //[X]
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue = {searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {searchedTodos.map(item => (
          <TodoItem key={item.text} text={item.text} completed={item.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />

    </>
  );
}

export default App;
