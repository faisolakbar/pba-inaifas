import useFetch from "../hooks/useFetch";
import React, { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { Link } from "react-router-dom";

export default function Agenda() {
  const targetRef = useRef(null);
  const isVisible = useElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    },
    targetRef
  );

  const { loading, error, data } = useFetch(
    `/api/artikels?filters[kategori_artikels][judul][$eq]=agenda&populate=%2A&sort[0]=publishedAt%3Adesc`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      <div className="h-screen"></div>
    );
  }

  const sliceData = data.data.slice(0, 4);

  return (
    <>
      <div className="font-roboto">
        <div
          className={`${
            !isVisible
              ? "opacity-0 scale-95"
              : "opacity-100 scale-100"
          } transition-all duration-500`}
        >
          <h2 className="text-lg capitalize text-main md:text-xl">agenda</h2>
          <span className="block h-0.5 w-10 bg-second"></span>
        </div>
        <div ref={targetRef}>
          {sliceData.map((agenda) => (
            <div key={agenda.id}>
              <Link
                to={`/articledetails/${agenda.id}/${agenda.attributes.slug}`}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
              >
                <div
                  className={`${
                    !isVisible ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  } transition-all duration-500 flex items-center space-x-2 pt-4 cursor-pointer group lg:pt-7`}
                >
                  <div className="w-1/4 h-fit flex flex-col items-center bg-slate400 rounded-sm">
                    <time className="font-bold text-white">
                      {new Intl.DateTimeFormat("in-ID", { month: "long" })
                        .format(
                          new Date(agenda.attributes.publishedAt).getMonth()
                        )
                        .substr(0, 3)}
                    </time>
                    <time className="text-white text-3xl font-extrabold">
                      {new Date(agenda.attributes.publishedAt).getDate()}
                    </time>
                  </div>
                  <h2 className="text-base w-3/4 h-fit flex items-center text-second font-roboto leading-snug line-clamp-3 group-hover:text-orange md:text-lg md:leading-tight">
                    {agenda.attributes.judul}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
