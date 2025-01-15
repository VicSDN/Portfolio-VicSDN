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
      <main className="p-4 m-4 mb-5 max-w-full overflow-hidden">
        <div className="flex-1 sm:flex flex-col">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;