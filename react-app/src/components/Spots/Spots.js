import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpots } from "../../store/spots";
import SpotContainer from "./SpotContainer";

export default function Spots() {
  const dispatch = useDispatch();

  // array of spots
  const spots = useSelector((state) => Object.values(state.spots));

  spots.sort(function (a, b) {
    return b.id - a.id;
  });

  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch]);

  return (
    <div>
      <SpotContainer spots={spots} />
    </div>
  );
}
