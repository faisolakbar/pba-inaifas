import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import useFetch from "../hooks/useFetch";

const config = require("../config.json");
export default function Struktur() {
  const { loading, error, data } = useFetch(`/api/struktur?populate=%2A`);
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
          <title>Struktur Organisasi PBA INAIFAS</title>
          <meta name="description" content="Struktur Organisasi PBA INAIFAS" />
          <link rel="canonical" href="http://localhost:3000/struktur" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="prose prose-sm prose-h1:text-second tracking-wide max-w-none md:col-span-8 lg:prose-base">
          <h1>Struktur Organisasi Program Studi Pendidikan Bahasa Arab</h1>
          <img
            src={
              config.url + data.data.attributes.gambar.data.attributes.url
            }
            alt={data.data.attributes.gambar.data.attributes.name}
          />
        </div>
        <div className="flex justify-center my-10 md:hidden">
          <span className=" h-[1px] w-3/4 bg-slate400"></span>
        </div>
        <div className="col-start-9 col-end-13">
          <Aside />
        </div>
      </div>
    </>
  );
}
