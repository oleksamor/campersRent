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

  return;
};

export default Catalog;
