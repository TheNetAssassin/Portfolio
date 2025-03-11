import Navbar from "./Navbar";
import Home from "./Home";
import Myself from "./Myself";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";


export default function App(){
  return <div>
  <Navbar/>
    <Home />
    <Myself />
    <Projects />
    <ContactMe />
    <Footer />
  </div>
}