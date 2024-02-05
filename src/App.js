import "./App.css";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Project";
import AboutMe from "./components/About Me/AboutMe";
import Footer from "./components/Footer/Footer";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="App" style={theme}>
      <Navbar />
      <AboutMe />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
