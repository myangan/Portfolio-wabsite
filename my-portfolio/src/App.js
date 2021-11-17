import "./App.css";
import Body from "./components/Body";
import Contact from "./components/contact";
import Header from "./components/header";
import Weather from "./components/weather";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Weather />
      <Contact />
    </div>
  );
}

export default App;
