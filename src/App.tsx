import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Test from "./routes/Test";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/test" component={Test} />
    </BrowserRouter>
  );
};

export default App;