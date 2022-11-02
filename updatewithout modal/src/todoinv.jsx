const Todoinv = (props) => {
  return (
    <div>
      <p>{props.task}</p>
      <button onClick={() => props.handleDel(props.id)}>delete</button>
      {props.on ? (
        <button onClick={() => props.handleOn(props.id)}>done </button>
      ) : (
        <button onClick={() => props.handleSet(props.id)}>update</button>
      )}
      {props.on ? (
        <input type="text" placeholder="task..." onChange={props.handleUpdate} />
      ) : (
        " "
      )}
    </div>
  );
};

export { Todoinv };
