import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ShareButton from "../component/ShareButton";
import LoginForm from "../component/LoginForm";
import ShowComment from "../component/ShowComments";
import Aside from "../component/Aside";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

const config = require("../config.json");
export default function ArticleDetails() {
  var [dataComment, setDataComment] = useState([]);
  const params = useParams();
  const { loading, error, data } = useFetch(
    `/api/artikels/${params.id}?populate=%2A`
  );

  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return "";
  }

  const changeDataComment = (e)=>{
    if(e.data){
      setDataComment([e.data, ...dataComment]);
    }
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{data.data.attributes.judul}</title>
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href={`http://localhost:3000/articledetails/${params.id}/${params.slug}`}
          />
          <meta name="keywords" content={data.data.attributes.judul} />
          <meta property="og:title" content={data.data.attributes.judul} />
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content={
              data.data.attributes.gambar.data.attributes.formats.medium.url
            }
          />
          <meta property="og:url" content="http://localhost:3000" />
          <meta
            property="og:site_name"
            content="Program Studi Pendidikan Bahasa Arab INAIFAS Kencong Jember"
          />
          <meta
            property="og:description"
            content={data.data.attributes.judul}
          />
          <meta
            name="twitter:card"
            content={
              data.data.attributes.gambar.data.attributes.formats.medium.url
            }
          ></meta>
          <meta name="twitter:title" content={data.data.attributes.judul} />
          <meta
            name="twitter:image"
            content={
              data.data.attributes.gambar.data.attributes.formats.medium.url
            }
          />
          <meta
            name="twitter:site"
            content={`http://localhost:3000/articledetails/${params.id}/${params.slug}`}
          />
          <meta name="twitter:creator" content="PBA INAIFAS" />
        </Helmet>
      </HelmetProvider>
      <div className="container mx-auto my-2 pb-2 font-roboto md:grid grid-cols-12 gap-6 lg:gap-8 md:my-4 md:pb-4 lg:my-8 lg:pb-8">
        <div className="col-span-8">
          {/* judul */}
          <div className="mb-5 space-y-4">
            <h1 className="text-xl text-second capitalize tracking-wide lg:text-3xl">
              {data.data.attributes.judul}
            </h1>
            <span className="block h-0.5 w-20 bg-second"></span>
          </div>
          {/* gambar */}
          <div className="aspect-w-4 aspect-h-2">
            <img
              src={
                data.data.attributes.gambar.data.attributes.formats.medium.url
              }
              alt={data.data.attributes.gambar.data.attributes.name}
              className="object-cover"
            />
          </div>

          <div className="flex space-x-3 text-xs text-slate400 my-1 lg:text-sm">
            {/* tanggal */}
            <time>
              {new Date(data.data.attributes.publishedAt).toLocaleDateString(
                "in-ID",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </time>
            {/* kategori */}
            {data.data.attributes.kategori_artikels.data.map((kategori) => (
              <p key={kategori.id} className="hidden md:block capitalize">
                {kategori.attributes.judul}
              </p>
            ))}
          </div>
          {/* isi */}
          <div className="prose prose-sm text-slate700 prose-strong:text-second prose-a:text-link tracking-wide my-4 max-w-none lg:prose-base">
            <ReactMarkdown children={data.data.attributes.isi} />
            {/* pdf */}
            {data.data.attributes.pdf.data ? (
              <a
                href={
                  config.url + data.data.attributes.pdf.data.attributes.url
                }
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Download
              </a>
            ) : (
              ""
            )}
          </div>
          {/* share */}
          <ShareButton title={data.data.attributes.judul} />

          {/* comment, login */}
          <div className="mt-3 pb-4 space-y-2 text-slate700 border-b border-slate400 text-sm lg:text-base lg:border-b-0">
            <h3 className="">Komentar</h3>
            <div className="max-h-40 overflow-y-scroll lg:max-h-64">
              <ShowComment data={dataComment} />
            </div>
            <div className="">
              <LoginForm changeDataComment={(e)=>changeDataComment(e)} />
            </div>
          </div>
        </div>
        <div className="col-start-9 col-end-13">
          <Aside />
        </div>
      </div>
    </>
  );
}
