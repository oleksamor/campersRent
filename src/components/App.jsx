import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../page/Home/Home.jsx";
import NotFound from "../page/NotFound/NotFound.jsx";
import Header from "./Header/Header.jsx";
import Catalog from "../page/Catalog/Catalog.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campers" element={<Catalog />} />
        {/* <Route path="/campers/:id" element={<SelectedCamper />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
