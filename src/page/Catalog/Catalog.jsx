import { useEffect, useState } from "react";
import css from "./Catalog.module.css";
import { fetchCampers } from "../../services/api";

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampers().then((data) => {
      setCampers(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="containerCatalog">
      <div className="{css.containerFilter}">
        <form>
          <div>
            <label htmlFor="location">Location</label>
            <input type="checkbox" />
          </div>

          <div>
            <label htmlFor="filters">Filters</label>
            <h3>Vehicle equipment</h3>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <h3>Vehicle type</h3>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Catalog;
