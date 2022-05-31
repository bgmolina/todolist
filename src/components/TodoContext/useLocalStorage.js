import React from 'react';

// custom hook de localStorage
const useLocalStorage = (itemName, initialValue) => {

    // inicia en false y solo indicara un error cuando suceda
    const [error, setError] = React.useState(false);

    // la aplicacion inicia cargando
    const [loading, setLoading] = React.useState(true);

    // Tomara como el dato que le ingresemos inicialmente al llamar al custom hook "useLocalStorage"
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(()=> {
        setTimeout(()=> { // muestra despues de 2 segundos

        try {
            // obtiene localStorage de 'TODOS_V1'
            const localStorageItem = localStorage.getItem(itemName);

            // variable que contendra objeto de TODOs
            let parsedItem;

            // valida si NO fue creado el localStorage 'TODOS_V1'
            if(!localStorageItem){
            // se crea el 'TODOS_V1' vacio
            localStorage.setItem(itemName, JSON.stringify(initialValue));

            // se asigna objeto vacio
            parsedItem = [];
            } else {
            // si ya fue creado se parsea para enviarlo al React.useState()
            parsedItem = JSON.parse(localStorageItem);

            // se actualiza los datos del localStorage
            setItem(parsedItem);

            // deja de carga cuando ya tiene los datos a mostrar
            setLoading(false);
            }
        } catch (error) {
            // si encuentra un error, actualiza el metodo
            setError(error);
        }

        }, 2000)
    });


    const updateLocalStorage = (newItem) => {
        try {
        // se convierte a texto el array modificado
        const stringifiedItem = JSON.stringify(newItem);

        // se actualiza el localStorage con el array anterior
        localStorage.setItem(itemName, stringifiedItem);

        // mostramos el array modificado
        setItem(newItem);
        } catch (error) {
        // si encuentra un error, actualiza el metodo
        setError(error);
        }
    };

    return {
        item,
        updateLocalStorage,
        loading,
        error,
    }

};

export {useLocalStorage}
