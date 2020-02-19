import React, { useState } from "react";
import groupBy from "lodash.groupby";
import nanoid from "nanoid";

const Main = ({ tasks, onNewTaskDone }) => {
  const byCategory = groupBy(tasks, t => t.category);
  const [obs, setObs] = useState("");
  return (
    <div>
      {Object.keys(byCategory).map(c => (
        <div key={c}>
          <h3>{c}</h3>
          {byCategory[c].map(t => (
            <div key={t.id}>
              <div>{t.text}</div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  onNewTaskDone(t.id, { id: nanoid, obs, date: Date.now() });
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
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Main;
