import React, { useState } from "react";
import {
  RiSearch2Line,
  RiArrowRightCircleFill,
  RiArrowRightCircleLine,
} from "react-icons/ri";
import { BiLeftArrowCircle } from "react-icons/bi";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import useFetch from "../hooks/useFetch"; // fetching custom hooks
import CircularProgress from "@mui/material/CircularProgress";
import CardsBody from "./CardsBody"; //all cards body
const AllCast = () => {
  const [fetchLink, setFetchLink] = useState(""); //state for fetch link
  const [cast, setCast] = useState("Character"); // state fo set dropdown value
  const [searchValue, setSearchValue] = useState("");
  // data fetching
  const { data, loading } = useFetch(
    fetchLink || "https://rickandmortyapi.com/api/character"
  );

  const options = ["Character", "Location", "Episode"];

  // function to go next page
  const nextPrevPage = (link) => {
    if (link) setFetchLink(link);
  };
  // dropdown
  const handleChange = (event) => {
    let path = event.value.toLowerCase();
    setCast(event.value);
    setFetchLink(`https://rickandmortyapi.com/api/${path}`);
  };
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
      <div className="the-cast">
        <div className="the-cast-head">
          {/*Page Title*/}
          <h1 className="the-cast-title">The Cast</h1>
          {/* Page header */}
          <div className="filter-area">
            <Dropdown
              options={options}
              value={cast}
              onChange={handleChange}
              placeholder="Select an option"
            />

            <div className="search">
              <RiSearch2Line />
              <input
                name="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        {/* page main content  */}
        <CardsBody
          cast={cast}
          fetchLink={fetchLink}
          data={data}
          loading={loading}
          searchValue={searchValue}
        />
        {/* pagination */}
        <div className="pagination-area">
          <p>Page</p>
          <BiLeftArrowCircle
            onClick={() => nextPrevPage(data.info.prev && data.info.prev)}
          />{" "}
          <span>
            {data && data.info.next != null
              ? data.info.next
                  .toString()
                  .slice(data.info.next.lastIndexOf("=") + 1) - 1
              : "Last Page"}
          </span>{" "}
          {data && data.info.next == null ? (
            <RiArrowRightCircleLine />
          ) : (
            <RiArrowRightCircleFill
              onClick={() =>
                nextPrevPage(data.info.next == null ? "" : data.info.next)
              }
            />
          )}
          <p> of {data && data.info.pages} </p>
        </div>
      </div>
    );
  }
};

export default AllCast;
