import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import SocialMedia from "./components/SocialMedia";

const App: React.FC = () => {
  return (
    <Router>
      <SocialMedia />
      <Header />
      <main className="ml-1/3 p-4">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
