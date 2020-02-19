import React, { useState } from "react";
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
      />
    </div>
  );
};

export default App;
