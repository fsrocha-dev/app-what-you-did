import React, { useState } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import AddTask from "./AddTask";
import Main from "./Main";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  return (
    <div>
      <Header />
      <AddTask
        onNewTask={t => {
          setTasks([...tasks, t]);
        }}
      />
      <Main
        tasks={tasks}
        onNewTaskDone={(taskId, log) => {
          setTasks([
            ...tasks.map(t => {
              if (t.id !== taskId) {
                return t;
              }
              return { ...t, logs: [...t.logs, log] };
            })
          ]);
        }}
        onRemoveTask={taskId => {
          Swal.fire({
            title: "Deseja realmente deletar?",
            text: "Isson não poderá ser disfeito!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim, delete!",
            cancelButtonText: "Não quero"
          }).then(result => {
            if (result.value) {
              setTasks([...tasks].filter(t => t.id !== taskId));
            }
          });
        }}
      />
    </div>
  );
};

export default App;
