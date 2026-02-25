//Este componente muestra una tarea individual y maneja los eventos de clic en la tarea.

const Task = ({ id, text, completed, deleteTask, toggleComplete }) => {
    return (
        <div>
          <span 
            onClick={() => toggleComplete(id)}
            style={{
                textDecoration: completed ? "line-through" : "none",
                cursor: "pointer"
            }}
           >
            {text}
           </span>
           <button onClick={() => deleteTask(id)}>Eliminar</button>
        </div>
    );
};

export default Task;
