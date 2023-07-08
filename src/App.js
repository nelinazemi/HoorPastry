import React from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Services from "./components/Services/Services";

function App() {
  return (
    <div class="App"> 
      <Navbar />
      <Intro />
      <Services />
      <Portfolio />
      <Testimonial />‍
      <Footer />
    </div>
  );
};

export default App;