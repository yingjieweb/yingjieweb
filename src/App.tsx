import React, { Suspense } from "react";

// components
import Loading from "./components/Loading";
import Nav from "./sections/Nav";

const Home = React.lazy(() => import("./sections/Home"));
const About = React.lazy(() => import("./sections/About"));
const Project = React.lazy(() => import("./sections/Project"));
const Contact = React.lazy(() => import("./sections/Contact"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Nav />

      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
    </Suspense>
  );
};

export default App;
