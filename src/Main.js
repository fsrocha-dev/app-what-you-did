import React, { useState } from "react";
import groupBy from "lodash.groupby";
import nanoid from "nanoid";
import { format } from "date-fns";

const Main = ({ tasks, onNewTaskDone, onRemoveTask }) => {
  const byCategory = groupBy(tasks, t => t.category);
  const [obs, setObs] = useState("");
  return (
    <div>
      {Object.keys(byCategory).map(c => (
        <div key={c}>
          <h3>{c}</h3>
          {byCategory[c].map(t => (
            <div key={t.id}>
              <div>
                {t.text}{" "}
                <button onClick={() => onRemoveTask(t.id)}>deletar</button>
              </div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  onNewTaskDone(t.id, { id: nanoid(), obs, date: Date.now() });
                  setObs("");
                }}
              >
                <input
                  type="text"
                  value={obs}
                  onChange={e => setObs(e.target.value)}
                />
                <button type="submit">+</button>
              </form>
              <table>
                <tbody>
                  {t.logs.map(l => (
                    <tr key={l.id}>
                      <td>{format(l.date, "dd/mm/yy hh:mm")}</td>
                      <td>{l.obs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Main;
