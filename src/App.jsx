import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Telus Industry Project</h1>
      <Footer />
    </>
  );
}

export default App;
