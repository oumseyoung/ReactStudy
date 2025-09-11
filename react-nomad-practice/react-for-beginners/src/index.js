import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

/*
문제점: 이대로 아래 App.js 실행하면 render가 두 번 되는 현상!
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

해결책: React.StrictMode 태그를 지워야함
React.StrictMode는 create-react-app로 설치했을 때 기본적으로 생성되는 태그
해당 태그로 감싸져 있는 경우에는 코드의 문제를 감지하고 경고하기 위해서 구성 요소를 두 번 렌더링
*/
