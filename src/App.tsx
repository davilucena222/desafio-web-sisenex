import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Router } from "./Router";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
