import NaverApiMap from "./NaverAPIMap.js";

function App() {
  return (
    <div className="App">
      <div className={"outline"}>
        <div className={"container"}>
          <NaverApiMap />
          <div className={"map"}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
