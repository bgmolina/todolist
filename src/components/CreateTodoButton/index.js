import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
    //por cada click en el boton se cambia el estado de "openModal"
    const onClickButton = () => {
        props.setOpenModal(!props.openModal);
    };

    return(
        <button
        className="CreateTodoButton"
        onClick={onClickButton}
        >+</button>
    );
};

export {CreateTodoButton};
