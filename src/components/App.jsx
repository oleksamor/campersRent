import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home.jsx";
import NotFound from "./NotFound/NotFound.jsx";
import Catalog from "./Catalog/Catalog.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campers" element={<Catalog />} />
        {/* <Route path="/campers/:id" element={<CamperId />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
