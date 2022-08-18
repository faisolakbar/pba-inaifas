import React from "react";
import useFetch from "../hooks/useFetch";
import Slider from "react-slick";

export default function Banner() {

  const { loading, error, data } = useFetch(`/api/banners?populate=%2A`);
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      <div className="h-screen"></div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrow: false,
  };
  return (
    <div className="relative -z-50">
      <Slider {...settings}>
        {data.data.map((banner) =>
            <div className="w-full m-auto" key={banner.id}>
              <img src={banner.attributes.gambar.data.attributes.url} alt={banner.attributes.nama} />
            </div>
        )}
      </Slider>
    </div>
  );
}
