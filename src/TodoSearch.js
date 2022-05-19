import './TodoSearch.css';

const TodoSearch = () => {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };

    return(
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            onChange={onSearchValueChange}
        />
    );
};

export {TodoSearch};
