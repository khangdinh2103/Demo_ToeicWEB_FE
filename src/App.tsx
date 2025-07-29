import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import PlacementTestPage from "./pages/PlacementTestPage"
import CoursesPage from "./pages/CoursesPage"
import PracticePage from "./pages/PracticePage"
import AIToolsPage from "./pages/AIToolsPage"
import "./App.css"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="toeic-ui-theme">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/placement-test" element={<PlacementTestPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/ai-tools" element={<AIToolsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
