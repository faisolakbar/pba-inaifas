import React from "react";
import { FaCalendarDay } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

export default function ArticlesData(props) {
  const category = props.children;
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
    return (
      <div className="h-screen"></div>
    );
  }

  const sliceData = data.data.slice(0, 2);
  return (
    <div>
      <div
        className={`${
          !isVisible ? "opacity-0 scale-95" : "opacity-100 scale-100"
        } transition-all duration-500`}
      >
        <h2 className="font-roboto text-lg capitalize text-main md:text-xl">
          {category}
        </h2>
        <span className="block h-0.5 w-10 bg-second"></span>
      </div>
      <div ref={targetRef}>
        {sliceData.map((berita) => (
          <div key={berita.id}>
            <Link
              to={`/articledetails/${berita.id}/${berita.attributes.slug}`}
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
                } transition-all duration-500 pt-4 group cursor-pointer lg:pt-8`}
              >
                <div className="aspect-h-1 aspect-w-3 group mb-3 lg:aspect-w-4 lg:aspect-h-2">
                  <img
                    src={
                      berita.attributes.gambar.data.attributes.formats.small.url
                    }
                    className="object-cover group-hover:brightness-[.7]"
                    alt={`${berita.attributes.gambar.data.attributes.name}`}
                  />
                  <div className="flex items-end p-1">
                    <div className="flex items-center space-x-1 text-white bg-white p-1 bg-opacity-30 backdrop-blur-sm drop-shadow-lg">
                      <FaCalendarDay className="text-sm" />
                      <time className="text-xs">
                        {new Date(
                          berita.attributes.publishedAt
                        ).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                </div>

                <div className="font-roboto leading-snug tracking-wide">
                  <h2 className=" text-second group-hover:text-orange mb-2 md:text-lg lg:leading-tightlg:text-xl">
                    {berita.attributes.judul}
                  </h2>
                  <p className="text-sm leading-snug line-clamp-3 text-slate500 md:text-base lg:leading-tight">
                    {berita.attributes.isi}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
