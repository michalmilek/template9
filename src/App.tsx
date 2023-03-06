import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AboutUs />
        <Projects />
        <Features />
      </main>
    </div>
  );
}

export default App;
