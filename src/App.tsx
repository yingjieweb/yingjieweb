import React, { Suspense } from "react";

// components
import Loading from "./components/Loading";
import Nav from "./sections/Nav";

const Home = React.lazy(() => import("./sections/Home"));
const About = React.lazy(() => import("./sections/About"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Nav />

      <main>
        <Home />
        <About />
      </main>
    </Suspense>
  );
};

export default App;
