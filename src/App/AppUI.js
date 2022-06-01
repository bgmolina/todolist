import React from 'react';
import {TodoCounter} from '../components/TodoCounter';
import {TodoSearch} from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import {TodoItem} from '../components/TodoItem';
import {CreateTodoButton} from '../components/CreateTodoButton';
import {TodoContext} from '../components/TodoContext';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext);

    return (
        <>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
            {error && <p>Hubo un error...</p>}
            {loading && <p>Cargando...</p>}
            {(!loading && !searchedTodos.length)&& <p>Crea tu primer TODO!</p>}

            {searchedTodos.map(item => (
                <TodoItem
                    key={item.text}
                    text={item.text}
                    completed={item.completed}
                    onComplete={() => completeTodo(item.text)}
                    onDelete={() => deleteTodo(item.text)}
                />
            ))}
        </TodoList>
        <CreateTodoButton />
        </>
    );
}

export {AppUI};
