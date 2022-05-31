import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpots } from "../../store/spots";
import { getUserSpots } from "../../store/your_spots";
import { getUsers } from "../../store/user";
import SpotContainer from "./SpotContainer";

export default function Spots() {
  const dispatch = useDispatch();

  // array of spots
  const spots = useSelector((state) => Object.values(state.spots));
  const user = useSelector((state) => state.session.user);

  spots.sort(function (a, b) {
    return b.id - a.id;
  });

  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  return (
    <div className="all_spots_main_container">
      <h1 className="all_spots_main_header">Browse Spots</h1>
      <SpotContainer spots={spots} />
    </div>
  );
}
