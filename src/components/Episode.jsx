import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import DetailsCard from "./DetailsCard";
import { breakpointDetails } from "../helper";
import { CircularProgress } from "@mui/material";
import useFetch from "../hooks/useFetch";
const Episode = () => {
  const { data, loading, error } = useFetch(
    "https://rickandmortyapi.com/api/episode"
  );
  return (
    <div className="mbl-area episode">
      <div className="meet-the-cast episode">
        <div className="head">
          <h1>Episodes</h1>
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
            breakpoints={breakpointDetails}
          >
            {loading ? (
              <CircularProgress />
            ) : data ? (
              data.results.map((e) => (
                <SwiperSlide>
                  <DetailsCard subText={e.episode} mainText={e.name} />
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

export default Episode;
