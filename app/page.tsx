import Home from "@/app/_components/home";
import About from "@/app/_components/home/about";
import Contact from "@/app/_components/home/contact";
import Project from "@/app/_components/home/project/index";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
