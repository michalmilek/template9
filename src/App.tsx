import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AboutUs />
        <Projects />
      </main>
    </div>
  );
}

export default App;
