import React from 'react';
import {TodoCounter} from '../components/TodoCounter';
import {TodoSearch} from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import {TodoItem} from '../components/TodoItem';
import {CreateTodoButton} from '../components/CreateTodoButton';


function AppUI(props) {
    return (
        <>
        <TodoCounter total={props.totalTodos} completed={props.completedTodos} />
        <TodoSearch searchValue = {props.searchValue} setSearchValue={props.setSearchValue}/>
        <TodoList>
        {props.error && <p>Hubo un error...</p>}
        {props.loading && <p>Cargando...</p>}
        {(!props.loading && !props.searchedTodos.length)&& <p>Crea tu primer TODO!</p>}

            {props.searchedTodos.map(item => (
            <TodoItem
                key={item.text}
                text={item.text}
                completed={item.completed}
                onComplete={() => props.completeTodo(item.text)}
                onDelete={() => props.deleteTodo(item.text)}
            />
            ))}
        </TodoList>
        <CreateTodoButton />
        </>
    );
}

export {AppUI};
