import useFetch from "../hooks/useFetch";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import React, { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

export default function Testimoni() {
  const targetRef = useRef(null);
  const isVisible = useElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    },
    targetRef
  );
  const { loading, error, data } = useFetch(`/api/testimonis?populate=%2A`);
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      ''
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
    <div ref={targetRef}>

      <div className={`${!isVisible ? "opacity-0 scale-95" : "opacity-100 scale-100"} transition-all duration-500 mt-10 py-6 md:py-8 lg:py-10`}>
        <Slider {...settings}>
          {data.data.map((testi) => (
            <div key={testi.id}>
              <div className="container mx-auto">
                <div className="m-auto flex flex-col items-center p-6 font-roboto text-sm md:flex-row md:space-x-8 lg:py-10 lg:px-14 lg:text-base">
                  <div className="flex justify-center">
                    <div className="rounded-full h-14 w-14 overflow-hidden shadow-md drop-shadow-md md:h-24 md:w-24 lg:h-28 lg:w-28">
                      <img
                        src={
                          testi.attributes.gambar.data.attributes.formats
                            .thumbnail.url
                        }
                        alt={testi.attributes.gambar.data.attributes.hash}
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="pt-2 tracking-wide text-center md:flex flex-col md:text-left md:p-0">
                    <div className="order-2">
                      <p className="text-orange font-bold tracking-wider">
                        {testi.attributes.nama}
                      </p>
                      <p className="text-slate800">
                        {testi.attributes.keterangan}
                      </p>
                    </div>
                    <div className="pt-4 text-slate800 md:p-0">
                      <FaQuoteLeft />
                      <h3 className="">{testi.attributes.isi}</h3>
                      <div className="flex justify-end">
                        <FaQuoteRight className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
