import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
// import React, { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setTDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  //console.log(value);
  // Definición de la función handleSubmit
  // Esta función maneja el evento de envío del formulario
  // e.preventDefault() se utiliza para evitar que el formulario se envíe de forma predeterminada
  // y console.log(title) imprime el valor del título en la consola

  // ESTA FUNCION  TOMA LO QUE ESTA EN onSubmit y pone el valor del evento y lo setea pone title y
  // descriptopn creando la tarea. se toma del evento o e o event el value, es decir el valor mediante e.target.value
  // y lo cooca en la funcon createTask mediante title y description
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setTDescription("");
    // console.log(title, description);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Descripción de la tarea"
          onChange={(e) => setTDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">
          Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
