import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useThemeStore } from "./stores/theme";

function Home() {
  return (
    <div className="min-h-screen bg-surface text-text-primary p-6">
      <h1 className="text-2xl font-bold">LifeKit</h1>
      <p className="text-text-muted mt-2">Web app — see README for structure.</p>
    </div>
  );
}

export default function App() {
  const dark = useThemeStore((s) => s.dark);
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", dark);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
