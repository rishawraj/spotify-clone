import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { SectionOne } from "./components/SectionOne";
import { SectionThree } from "./components/SectionThree";
import { SectionTwo } from "./components/SectionTwo";

function App() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
}

export default App;
