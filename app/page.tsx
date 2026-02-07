import About from "@/components/About";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase/Showcase";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Contact />
    </main>
  );
}