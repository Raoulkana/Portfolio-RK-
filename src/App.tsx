import About from "./components/About";
import Experiences from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

export default function App () {
  return (
    <div>

     <div className="p-5 md:px-[15%]">
        <Navbar/>
        <Home />
     </div>

     <About/>

     <div className="p-5 md:px-[15%]">
      <Experiences/>
      <Projects/>
     </div>
     <Footer/>
    </div>
  )
}