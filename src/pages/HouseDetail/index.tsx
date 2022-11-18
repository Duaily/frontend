import React from "react";
import { useParams } from "react-router-dom";

function HouseDetail() {
  const id = useParams().id;
  return <div>{id}</div>;
}

export default HouseDetail;
