//Este componente proporciona un formulario para agregar nuevas tareas a la lista.

import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() === "") return;

        addTask(inputValue);
        setInputValue("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='Nueva tarea...'
            />
            <button type="submit">Añadir</button>
        </form>
    );
};

export default AddTaskForm;