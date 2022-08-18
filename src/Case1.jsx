import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("update number");
    const countdown = setInterval(() => {
      setNumber(number + 1);
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, [number]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>{number}</div>
    </div>
  );
}

export default App;
