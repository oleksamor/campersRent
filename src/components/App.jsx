import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../page/Home/Home.jsx";
import NotFound from "../page/NotFound/NotFound.jsx";
import Header from "./Header/Header.jsx";
import Catalog from "../page/Catalog/Catalog.jsx";
import SelectedCamper from "../page/SelectedCamper/SelectedCamper.jsx";
import Reviews from "./Reviews/Reviews.jsx";
import Features from "./Features/Features.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campers" element={<Catalog />} />

        <Route path="/campers/:camperId" element={<SelectedCamper />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
