import Blog from "components/Blog";
import Footer from "components/Footer";
import InquiryForm from "components/InquiryForm";
import GlobalStyle from "globalStyles";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <main>
          <AboutUs />
          <Projects />
          <Features />
          <Slider />
          <FAQ />
          <InquiryForm />
          <Blog />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
