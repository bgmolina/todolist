import './TodoSearch.css';
import React from 'react';

const TodoSearch = () => {

    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <>
            <input
                className="TodoSearch"
                placeholder="Cebolla"
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <p>{searchValue}</p>
        </>
    );
};

export {TodoSearch};
