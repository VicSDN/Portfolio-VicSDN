import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SocialMedia from "./components/SocialMedia";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";

const App: React.FC = () => {
  return (
    <Router basename="/Portfolio-VicSDN">
      <SocialMedia />
      <Header />
      <main className="ml-1/3 p-4">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
