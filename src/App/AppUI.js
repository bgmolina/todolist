import React from 'react';
import {TodoCounter} from '../components/TodoCounter';
import {TodoSearch} from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import {TodoItem} from '../components/TodoItem';
import {CreateTodoButton} from '../components/CreateTodoButton';
import {TodoContext} from '../components/TodoContext';

function AppUI() {
    return (
        <>
        <TodoCounter/>
        <TodoSearch/>
        <TodoContext.Consumer>
            {value => (
                <TodoList>
                    {value.error && <p>Hubo un error...</p>}
                    {value.loading && <p>Cargando...</p>}
                    {(!value.loading && !value.searchedTodos.length)&& <p>Crea tu primer TODO!</p>}

                    {value.searchedTodos.map(item => (
                        <TodoItem
                            key={item.text}
                            text={item.text}
                            completed={item.completed}
                            onComplete={() => value.completeTodo(item.text)}
                            onDelete={() => value.deleteTodo(item.text)}
                        />
                    ))}
                </TodoList>
            )}
        </TodoContext.Consumer>
        <CreateTodoButton />
        </>
    );
}

export {AppUI};
