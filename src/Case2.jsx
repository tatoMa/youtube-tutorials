import { useEffect, useState } from "react";

function App() {
  const [selected, setSelected] = useState(1);
  const [todo, setTodo] = useState(0);

  const switchSelected = () => {
    setSelected(selected + 1);
  };
  useEffect(() => {
    let isCancelled = false;
    fetch(`https://jsonplaceholder.typicode.com/todos/${selected}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) setTodo(data);
      });
    return () => {
      isCancelled = true;
    };
  }, [selected]);
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button onClick={switchSelected}>Switch ID</button>
      <div>{selected}</div>
      <div>{JSON.stringify(todo)}</div>
    </div>
  );
}

export default App;
