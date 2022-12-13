import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import CastCard from "./CastCard"; //cast card
import DetailsCard from "./DetailsCard"; // details cards

const CardsBody = ({ cast, data, loading, searchValue }) => {
  return (
    <div className="cards-body">
      {loading ? (
        <CircularProgress />
      ) : cast == "Character" ? (
        data &&
        data.results
          .filter((e) => e.name.match(new RegExp(searchValue, "i")))
          .map((e) => <CastCard charName={e.name} image={e.image} id={e.id} />)
      ) : loading ? (
        <CircularProgress />
      ) : cast == "Location" ? (
        <>
          {data &&
            data.results
              .filter((e) => e.name.match(new RegExp(searchValue, "i")))
              .map((e) => (
                <DetailsCard subText={`#${e.id}`} mainText={e.name} />
              ))}
        </>
      ) : cast == "Episode" ? (
        <>
          {data &&
            data.results
              .filter((e) => e.name.match(new RegExp(searchValue, "i")))
              .map((e) => (
                <DetailsCard subText={e.episode} mainText={e.name} />
              ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardsBody;
