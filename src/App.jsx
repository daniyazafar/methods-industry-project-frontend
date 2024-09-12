import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./App.scss";
import Form from "./Components/Form/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrap your app with Router */}
      <Header />
      <Form />
      <Footer />
    </Router>
  );
}

export default App;
