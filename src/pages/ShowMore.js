import React from "react";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaCalendarDay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aside from "../component/Aside";
import Pagination from "../component/Pagination";
import useFetch from "../hooks/useFetch";

const config = require("../config.json");
export default function ShowMore({ category }) {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `/api/artikels?filters[kategori_artikels][judul][$eq]=${category}&populate=%2A&sort[0]=publishedAt%3Adesc&pagination[page]=${page}&pagination[pageSize]=10`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return "";
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{category} PBA INAIFAS</title>
          <meta name="description" content="HAKI PBA INAIFAS" />
          <link rel="canonical" href="http://localhost:3000/haki" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="container mx-auto my-2 pb-2 md:grid grid-cols-12 md:my-4 md:pb-4 lg:my-8 lg:pb-8">
        <div className="col-span-8">
          <div>
            <h2 className="font-roboto text-lg capitalize text-main md:text-xl">
              {category}
            </h2>
            <span className="block h-0.5 w-10 bg-second"></span>
          </div>
          <div className="flex flex-row flex-wrap lg:pt-4">
            {data.data.map((berita) => (
              <div
                key={berita.id}
                className=" pt-4 md:py-4 md:pr-6 md:w-[50%] lg:pr-8"
              >
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
                  <div className="group cursor-pointer">
                    <div className="aspect-h-1 aspect-w-3 group mb-3 md:aspect-w-4 md:aspect-h-2">
                      <img
                        src={
                          config.url +
                          berita.attributes.gambar.data.attributes.formats.small
                            .url
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
                      <h2 className=" font-bold text-slate700 group-hover:text-orange mb-2 md:text-lg lg:leading-tight">
                        {berita.attributes.judul}
                      </h2>
                      <p className="text-sm leading-snug line-clamp-3 indent-3 text-slate500 lg:leading-tight">
                        {berita.attributes.isi}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Pagination data={data} page={page} setPage={setPage} />
        </div>
        <div className="col-start-9 col-end-13 ">
          <Aside></Aside>
        </div>
      </div>
    </>
  );
}
