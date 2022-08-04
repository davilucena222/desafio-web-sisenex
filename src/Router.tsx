import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SearchResult } from "./pages/searchResult";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchResult" element={<SearchResult />} />
    </Routes>
  );
}