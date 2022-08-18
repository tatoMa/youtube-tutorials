import { useEffect, useState } from "react";

function App() {
  const [selected, setSelected] = useState(1);
  const [todo, setTodo] = useState(0);

  const switchSelected = () => {
    setSelected(selected + 1);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://jsonplaceholder.typicode.com/todos/${selected}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
      })
      .catch((err) => {
        console.log(err.name);
      });
    return () => {
      controller.abort();
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
