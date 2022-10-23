import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  //captura todo lo escrito en "textarea"
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    //evita recarga de pagina al hacer click en "Añadir"
    event.preventDefault();
    //agrega item al array [TODOS_V1]
    addTodo(newTodoValue);
    //cierra modal
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Ingresa una nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        //placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>

        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
