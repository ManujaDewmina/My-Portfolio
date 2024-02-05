import "./App.css";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Project";
import AboutMe from "./components/About Me/AboutMe";
import Footer from "./components/Footer/Footer";
import IndustryExperience from "./components/Industry Experience/IndustryExperience";
import Competitions from "./components/Competition/Competitions";
import ProgrammingSkills from "./components/Professional Skillset/ProgrammingSkills";
import Certifications from "./components/Certifications/Certifications";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="App" style={theme}>
      <Navbar />
      <AboutMe />
      <IndustryExperience />
      <Education />
      <Competitions />
      <Projects />
      <Certifications />
      <ProgrammingSkills />
      <Footer />
    </div>
  );
}

export default App;
