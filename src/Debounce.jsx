// import { debounce } from "lodash";
import { useState, useCallback, useMemo } from "react";

export default function Debounce() {
  const [value, setValue] = useState("");

  function debounce(func, delay = 1000) {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const handleDebounceFn = (id) => {
    console.log(id);
    if (id)
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
  };

  const debounceFn = useMemo(() => debounce(handleDebounceFn, 1000), []);

  function handleChange(event) {
    setValue(event.target.value);
    debounceFn(event.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input value={value} onChange={(event) => handleChange(event)} />
    </div>
  );
}
