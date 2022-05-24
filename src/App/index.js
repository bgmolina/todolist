import React from 'react';
import {AppUI} from './AppUI';

// custom hook de localStorage
const useLocalStorage = (itemName, initialValue) => {
  // obtiene localStorage de 'TODOS_V1'
  const localStorageItem = localStorage.getItem(itemName);

  // variable que contendra objeto de TODOs
  let parsedItem;

  // valida si NO fue creado el localStorage 'TODOS_V1'
  if(!localStorageItem){
    // se crea el 'TODOS_V1' vacio
    localStorage.setItem(itemName, JSON.stringify(initialValue));

    // se asigna objeto vacio
    parsedItem = [];
  } else {
    // si ya fue creado se parsea para enviarlo al React.useState()
    parsedItem = JSON.parse(localStorageItem);
  }

  // declaramos estado [todos] que por defecto contrendra el array previamente creada
  const [item, setItem] = React.useState(parsedItem);

  const updateLocalStorage = (newItem) => {
    // se convierte a texto el array modificado
    const stringifiedItem = JSON.stringify(newItem);

    // se actualiza el localStorage con el array anterior
    localStorage.setItem(itemName, stringifiedItem);

    // mostramos el array modificado
    setItem(newItem);
  };

  return [
    item,
    updateLocalStorage
  ]

};

function App() {
  // llamo a custom hook creado previamente
  const [todos, updateLocalStorage] = useLocalStorage('TODOS_V1', []);

  // declaramos el estado para ver lo escrito en el input desde aqui,
  // para luego enviar como parametro a la etiqueta [TodoSearch]
  const [searchValue, setSearchValue] = React.useState('');

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
