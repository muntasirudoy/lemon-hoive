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
const Locations = () => {
  const { data, loading } = useFetch(
    "https://rickandmortyapi.com/api/location"
  );
  return (
    <div className="mbl-area locations">
      <div className="meet-the-cast locations">
        <div className="head">
          <h1>Locations</h1>
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
                  <DetailsCard subText={`#${e.id}`} mainText={e.name} />
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

export default Locations;
