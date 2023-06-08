import React, { Suspense } from "react";

// components
import Loading from "./components/Loading";
import Nav from "./sections/Nav";

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Nav />
    </Suspense>
  );
};

export default App;
