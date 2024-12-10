import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchCampersById } from "../../services/api";

const SelectedCamper = () => {
  const params = useParams();
  console.log(params);
  const [camper, setCamper] = useState([]);
  useEffect(() => {
    fetchCampersById(params.camperId).then((data) => setCamper(data));
  }, [params.camperId]);

  if (!camper) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <div>
        <p> Selected Camper #{params.camperId}</p>
        <h2>
          {camper.name} <img src={camper.gallary} />
        </h2>

        <h3> Price: {camper.price}</h3>
        <h3>rating: {camper.rating}</h3>
        <h3>location: {camper.location}</h3>
      </div>

      <div className="flex">
        <NavLink to="features">Features</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default SelectedCamper;
