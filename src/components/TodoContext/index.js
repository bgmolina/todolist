import React from 'react';
import {useLocalStorage} from './useLocalStorage.js';

//variable para usar React Context
const TodoContext = React.createContext();

//TodoContext se convierte asi en un Provider y un Consumer del metodo createContext
const TodoProvider = (props) => {
    // llamo a custom hook creado previamente
    const {
    item: todos, // renombramos
    updateLocalStorage,
    loading,
    error,
    } = useLocalStorage('TODOS_V1', []);

    // declaramos el estado para ver lo escrito en el input desde aqui,
    // para luego enviar como parametro a la etiqueta [TodoSearch]
    const [searchValue, setSearchValue] = React.useState('');

    // estado con inicializacion en false para Modal
    const [openModal, setOpenModal] = React.useState(false);

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

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};

