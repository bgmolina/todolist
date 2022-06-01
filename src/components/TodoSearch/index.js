import React from 'react';
import {TodoContext} from '../TodoContext';

const TodoSearch = () => {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
};

export {TodoSearch};
