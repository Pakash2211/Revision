import React from "react";
import { v4 as uuid } from "uuid";
import { Todoinv } from "./todoinv";

const Todo = () => {
  const [task, setTask] = React.useState("");
  const [all, setAll] = React.useState([]);
  const [update, setUpdate] = React.useState("");
  function handleTask(e) {
    setTask(e.target.value);
  }
  const handleUpdate = (e) => {
    setUpdate(e.target.value);
  };
  const handleAdd = () => {
    if (task.length !== 0) {
      let task1 = {
        task,
        id: uuid(),
        on: false
      };
      setAll([...all, task1]);
      setTask("");
    }
  };
  const handleDel = (id) => {
    const update = all.filter((ele) => {
      return ele.id !== id;
    });
    setAll(update);
  };
  const handleSet = (id) => {
    let data = all.map((ele) => {
      if (ele.id === id) {
        return { ...ele, on: true };
      } else {
        return ele;
      }
    });
    setAll(data);
  };

  const handleOn = (id) => {
    let data = all;
    if (update.length !== 0) {
      data = all.map((ele) => {
        if (ele.id === id) {
          return { ...ele, on: false, task: update };
        } else {
          return ele;
        }
      });
    } else {
      data = all.map((ele) => {
        if (ele.id === id) {
          return { ...ele, on: false };
        } else {
          return ele;
        }
      });
    }
    setAll(data);
  };

  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="task..."
        onChange={handleTask}
        name="task"
        value={task}
      />
      <button onClick={handleAdd}>Add</button>
      {""}
      {all.map((ele) => {
        return (
          <Todoinv
            {...ele}
            handleDel={handleDel}
            handleSet={handleSet}
            handleOn={handleOn}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </>
  );
};
export { Todo };
