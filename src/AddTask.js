import React, { useState } from "react";
import styled from "styled-components";
import nanoid from "nanoid";

import plus from "./assets/plus.svg";
import IconButton from "./shared/IconButton";

const Container = styled.div`
  background-color: #0f9de6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

const Title = styled.h1`
  font-weight: 600;
`;

const DefaultBanner = ({ setAdding }) => (
  <React.Fragment>
    <Title>
      O que <br /> você fez?
    </Title>
    <button alt="Adicionar coisas feitas" onClick={() => setAdding(true)}>
      <img src={plus} alt="Adicionar" />
    </button>
  </React.Fragment>
);

const AddNewTaskContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
`;

const InputButton = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddNewTask = ({ setAdding, onNewTask }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Outros");
  return (
    <AddNewTaskContainer
      onSubmit={e => {
        e.preventDefault();
        if (text.trim() === "") {
          return;
        }
        setAdding(false);
        onNewTask({
          id: nanoid(),
          text,
          category,
          logs: []
        });
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
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">
        <img src={plus} alt="Adicionar coisa feita" />
      </button>
    </AddNewTaskContainer>
  );
};

const Section = styled.div`
  padding: 1em 0.5em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const AddTask = ({ onNewTask }) => {
  const [isAdding, setAdding] = useState(false);
  return (
    <Container>
      <Section>
        {isAdding ? (
          <AddNewTask setAdding={setAdding} onNewTask={onNewTask} />
        ) : (
          <DefaultBanner setAdding={setAdding} />
        )}
      </Section>
    </Container>
  );
};

export default AddTask;
