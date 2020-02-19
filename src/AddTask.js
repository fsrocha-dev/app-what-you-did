import React, { useState } from "react";
import nanoid from "nanoid";

// import { Container } from './styles';

const AddTask = ({ onNewTask }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          onNewTask({ id: nanoid(), text, category, logs: [] });
          setText("");
        }}
      >
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option>Outros</option>
          <option>Casa</option>
          <option>Trabalho</option>
          <option>Esportes</option>
          <option>Estudos</option>
        </select>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
