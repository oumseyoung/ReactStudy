function MinutesToHours() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (e) => setAmount(e.target.value);
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((prev) => !prev);
  };

  return (
    <div>
      <label htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        type="number"
        placeholder="Minutes"
        value={inverted ? amount * 60 : amount}
        onChange={onChange}
        disabled={inverted}
      />

      <label htmlFor="hours">Hours</label>
      <input
        id="hours"
        type="number"
        placeholder="Hours"
        value={inverted ? amount : Math.round(amount / 60)}
        onChange={onChange}
        disabled={!inverted}
      />

      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>Invert</button>
    </div>
  );
}

function KmToMiles() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (e) => setAmount(e.target.value);
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((prev) => !prev);
  };

  return (
    <div>
      <label htmlFor="km">Km</label>
      <input
        id="km"
        type="number"
        placeholder="Km"
        value={inverted ? amount * 1.609 : amount}
        onChange={onChange}
        disabled={inverted}
      />

      <label htmlFor="miles">Miles</label>
      <input
        id="miles"
        type="number"
        placeholder="Miles"
        value={inverted ? amount : (amount / 1.609).toFixed(2)}
        onChange={onChange}
        disabled={!inverted}
      />

      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>Invert</button>
    </div>
  );
}

function App() {
  const [index, setIndex] = React.useState("xx");
  const onSelect = (e) => setIndex(e.target.value);

  return (
    <div className="container">
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "0" && <MinutesToHours />}
      {index === "1" && <KmToMiles />}
      {index === "xx" && <p>Please select your units</p>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
