import { About } from "./components/ui/About";
import { Contact } from "./components/ui/Contact";
import { Navbar } from "./components/ui/Navbar";
import { Projects } from "./components/ui/Projects";
import { Skills } from "./components/ui/Skills";


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
