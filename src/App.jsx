import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experiences/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
