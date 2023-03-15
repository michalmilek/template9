import Blog from "components/Blog";
import Header from "components/Header";
import InquiryForm from "components/InquiryForm";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Projects from "../components/Projects";
import Slider from "../components/Slider";

function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <Projects />
      <Features />
      <Slider />
      {/* <FAQ /> */}
      <InquiryForm />
      <Blog />
    </main>
  );
}

export default Home;
