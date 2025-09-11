import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("run all the time"); // 계속 렌더가 됨. 처음 한 번만 렌더되게 하고 싶은 것도 있을텐데 -> 해결책: useEffect
  const runOnlyOnce = () => {
    console.log("run only once");
  };
  useEffect(() => {
    console.log("Call the api..."); // 한 번만 실행되는 코드
  }, []);
  // useEffect(runOnlyOnce, []);
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

/*
useEffect는 두 개의 argument를 가지는 function
첫번째 argument: 딱 한 번만 실행하고 싶은 코드
두번째 argument: 

useEffect 내에 코드가 실행되는 시점이 컴포넌트의 렌더링 이후

** memo와 useEffect의 차이점은?
- memo: Props가 변화 되지 않은 등 컴포넌트가 업데이트 되지 않아도 되는 상황 에서 re-redering이 되는 불필요함을 막기 위해 쓰임 (성능 최적화에 가까움)
- useEffect : 컴포넌트에서 어떠한 변화가 있을 때, 특정 함수에 대한 실행을 제어하는 Hook
*/
