import { useState } from "react/cjs/react.development";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
// import React, { useState } from "react";

function App() {
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="Exhibyte"
        mode={Mode}
        toggleMode={toggleMode}
        about="about us"
      />
      <div className="container">
        {" "}
        <Textform heading="Enter the test to analyze" />
      </div>
      <About />
    </>
  );
}

export default App;
