import React from 'react';
import {AppUI} from './AppUI';
/*
const defaultTodos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:true},
  {text:'Llorar con la llorona', completed:false}
];
*/
function App() {
  // obtiene localStorage de 'TODOS_V1'
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  // variable que contendra objeto de TODOs
  let parsedTodos;

  // valida si NO fue creado el localStorage 'TODOS_V1'
  if(!localStorageTodos){
    // se crea el 'TODOS_V1' vacio
    localStorage.setItem('TODOS_V1', JSON.stringify([]));

    // se asigna objeto vacio
    parsedTodos = [];
  } else {
    // si ya fue creado se parsea para enviarlo al React.useState()
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // declaramos el estado para ver lo escrito en el input desde aqui,
  // para luego enviar como parametro a la etiqueta [TodoSearch]
  const [searchValue, setSearchValue] = React.useState('');

  // declaramos estado [todos] que por defecto contrendra el array previamente creada
  const [todos, setTodos] = React.useState(parsedTodos);

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
  };

  const updateLocalStorage = (newTodos) => {
    // se convierte a texto el array modificado
    const stringifiedTodos = JSON.stringify(newTodos);

    // se actualiza el localStorage con el array anterior
    localStorage.setItem('TODOS_V1', stringifiedTodos);

    // mostramos el array modificado
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    // obtiene el indice del item del array [todos] que se haga click
    const todoIndex = todos.findIndex(item => item.text === text);

    // hacemos copia del array [todos]
    const newTodo = [...todos];

    //actualizamos el valor "completed" del indice obtenido previamente
    newTodo[todoIndex].completed = true;

    // llama funcion para persistir las modificaciones en localStorage
    updateLocalStorage(newTodo);
  };

  const deleteTodo = (text) => {
    // obtiene todos los item del array [todos] MENOS al que se haga click
    const newTodo = todos.filter(item => item.text !== text);

    // llama funcion para persistir las modificaciones en localStorage
    updateLocalStorage(newTodo);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue = {searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
