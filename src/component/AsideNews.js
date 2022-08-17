import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useElementOnScreen from "../hooks/useElementOnScreen";
import useFetch from "../hooks/useFetch";

export default function AsideNews({ category }) {
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
    `/api/artikels?filters[kategori_artikels][judul][$eq]=${category}&populate=%2A&sort[0]=publishedAt%3Adesc`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return "";
  }
  const sliceData = data.data.slice(0, 4);
  return (
    <div ref={targetRef}>
      <div
        className={`${
          !isVisible ? "opacity-0 scale-95" : "opacity-100 scale-100"
        } transition-all duration-500`}
      >
        <h2 className="font-roboto text-lg capitalize text-main md:text-xl">
          {category} Terbaru
        </h2>
        <span className="block h-0.5 w-10 bg-second"></span>
      </div>

      <div className="pt-3 lg:pt-7 space-y-3">
        {sliceData.map((article) => (
          <div key={article.id}>
            <div className="">
              <Link
                to={`/articledetails/${article.id}/${article.attributes.slug}`}
                className="block font-roboto leading-snug tracking-wide hover:text-orange"
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
                  } transition-all duration-500`}
                >
                  <p className="text-xs text-slate400">
                    {new Date(
                      article.attributes.publishedAt
                    ).toLocaleDateString("in-ID")}
                  </p>

                  <p className="text-base text-slate700 hover:text-orange">
                    {article.attributes.judul}
                  </p>
                  <p className="line-clamp-2 text-sm text-slate500">
                    {article.attributes.isi}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
