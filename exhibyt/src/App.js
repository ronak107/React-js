import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
// import Textform from "./component/Textform";

function App() {
  return (
    <>
      <Navbar title="Exhibyte" about="about us" />
      <div className="container">
        {" "}
        {/* <Textform heading="Enter the test to analyze" /> */}
      </div>
      <About />
    </>
  );
}

export default App;
