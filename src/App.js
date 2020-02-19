import React from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import AddTask from "./AddTask";
import Main from "./Main";
import useLocalstorage from "@rooks/use-localstorage";
import { ThemeProvider } from "styled-components";

const THEMES = {
  dark: {
    background: "#3e3e3e",
    text: "#fff",
    categoryColor: "#fff"
  },
  light: {
    background: "#fff",
    text: "#333",
    categoryColor: "#929db6"
  }
};

const App = () => {
  const [tasks, setTasks] = useLocalstorage("app-task:db", []);
  const [darkTheme, setDarkTheme] = useLocalstorage("app-task:theme", false);

  return (
    <ThemeProvider theme={THEMES[darkTheme ? "dark" : "light"]}>
      <div>
        <Header onToggleDarkTheme={() => setDarkTheme(!darkTheme)} />
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
    </ThemeProvider>
  );
};

export default App;
