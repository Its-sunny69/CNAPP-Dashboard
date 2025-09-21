import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { DashboardProvider } from "./context/DashboardContext";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <DashboardProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </DashboardProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
