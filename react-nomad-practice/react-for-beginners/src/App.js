import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render"); // 계속 렌더가 됨. 처음 한 번만 렌더되게 하고 싶은 것도 있을텐데
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button text={"continue"} />
    </div>
  );
}

export default App;
