import { useState } from "react";

import CoreConcepts from "./comp/CoreConcepts.jsx";
import Header from "./comp/Header/Header.jsx";
import Examples from "./comp/Examples.jsx";

// -------------------

// --- Code responsible for the random geenration

// Header Function

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
