import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./App.scss";
import Form from "./Components/Form/Form";

function App() {

  return (
    <Router>
      <div className="full-page__content">
      <Header />
      <Form />
      </div>
      <div className="full-page__footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
