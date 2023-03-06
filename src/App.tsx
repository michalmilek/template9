import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AboutUs />
        <Projects />
        <Features />
        <Slider />
      </main>
    </div>
  );
}

export default App;
