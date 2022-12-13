import React, { useEffect } from "react";
import CastCard from "./CastCard";
import { Box, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import { breakpoint } from "../helper";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const MeetTheCast = () => {
  const { data, loading } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <div className="mbl-area all-cast">
      <div className="meet-the-cast all-cast">
        <div className="head">
          <h1>Meet The Cast</h1>
          <Link to="/the-cast" className="view-all">
            View All
          </Link>
        </div>
        <div className="castes">
          {/* slider area */}
          <Swiper
            slidesPerView={5}
            spaceBetween={80}
            loop={true}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
            breakpoints={breakpoint}
          >
            {loading ? (
              <CircularProgress />
            ) : data ? (
              data.results.map((e) => (
                <SwiperSlide>
                  <CastCard charName={e.name} image={e.image} id={e.id} />
                </SwiperSlide>
              ))
            ) : (
              "No data is available"
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MeetTheCast;
