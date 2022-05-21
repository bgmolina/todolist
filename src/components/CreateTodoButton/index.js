import './CreateTodoButton.css';

const CreateTodoButton = () => {
    const onClickButton = (msg) => {
        console.log(msg);
    };

    return(
        <button
        className="CreateTodoButton"
        onClick={() => onClickButton("ventana del modal")}
        >+</button>
    );
};

export {CreateTodoButton};
