import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { CategoryPage } from "./pages/CategoryPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}