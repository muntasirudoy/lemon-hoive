import React from "react";
import Logo from "../components/Logo";
import SingleCastDetails from "../components/SingleCastDetails";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import PositionShape from "../components/PositionShape";

const CastDetails = () => {
  const param = useParams().id;
  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/character/${param}`
  );

  return (
    <div className="main cast">
      <div className="bg-images">
        <div className="container">
          <Logo />
          <SingleCastDetails data={data} loading={loading} />
        </div>
      </div>
      <PositionShape />
    </div>
  );
};

export default CastDetails;
