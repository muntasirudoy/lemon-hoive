import { CircularProgress } from "@mui/material";
import React from "react";
import useFetch from "../hooks/useFetch";

const SingleCastDetails = ({ data, loading }) => {
  let episode =
    data &&
    data.episode.map((e) => {
      return e.toString().slice(e.lastIndexOf("/") + 1);
    });

  const { data: newdata } = useFetch(
    `https://rickandmortyapi.com/api/episode/${String(episode && episode)}`
  );

  if (loading) {
    return (
      <>
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "-50px",
          }}
        >
          <CircularProgress />
        </div>
      </>
    );
  } else {
    return (
      <div className="container">
        <div className="main-cast-details">
          <div className="image-card-area">
            <div>
              <h1 className="image-card-title">{data && data.name}</h1>
              <div className="image-card-body">
                <img className="icon-img" src="/cast.png" alt="cast" />
              </div>
            </div>
          </div>
          <div className="details">
            <div className="details-sm">
              <div className="detail-card sm">
                <img className="icon-img" src="/love.svg" alt="love" />
                <h2>
                  Status <br /> <span>{data && data.status}</span>{" "}
                </h2>{" "}
              </div>
              <div className="detail-card sm">
                <img className="icon-img" src="/species.svg" alt="love" />{" "}
                <h2>
                  Species <br /> <span>{data && data.species}</span>{" "}
                </h2>{" "}
              </div>
              <div className="detail-card sm">
                <img className="icon-img" src="/gender.svg" alt="love" />{" "}
                <h2>
                  Gender <br /> <span>{data && data.gender}</span>{" "}
                </h2>{" "}
              </div>
            </div>
            <div className="detail-card full">
              <span>
                <img className="icon-img" src="/species.svg" alt="love" />{" "}
                <h2>
                  Last Known Location <br />{" "}
                  <span>{data && data.location.name}</span>{" "}
                </h2>{" "}
              </span>
              <img className="frame" src="/frame.svg" alt="frame" />
            </div>
            <div className="detail-card full">
              <span>
                <img className="icon-img" src="/location.svg" alt="love" />{" "}
                <h2>
                  Origin(s) <br /> <span>{data && data.origin.name}</span>{" "}
                </h2>{" "}
              </span>
              <img className="frame" src="/frame.svg" alt="frame" />
            </div>
            <div className="detail-card full">
              <span>
                <img className="icon-img" src="/episodes.svg" alt="love" />{" "}
                <h2>
                  Episodes <br />
                  <span>
                    <ul>
                      {newdata && Array.isArray(newdata) ? (
                        newdata.map((e, i) => i < 7 && <li>{e.name}</li>)
                      ) : (
                        <li>{newdata && newdata.name}</li>
                      )}
                    </ul>
                  </span>{" "}
                </h2>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleCastDetails;
