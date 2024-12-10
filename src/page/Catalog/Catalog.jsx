import { useEffect, useState } from "react";
import s from "./Catalog.module.css";
import { fetchCampers } from "../../services/api.js";
import { Link } from "react-router-dom";

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
    <div className="s.containerCatalog">
      <div className={s.containerFilter}>
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
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            <Link to={camper.id.toString()}>
              {camper.id} {camper.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
