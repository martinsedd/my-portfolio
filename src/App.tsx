import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection.tsx";
import ContactSection from "./components/ContactSection/ContactSection.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;