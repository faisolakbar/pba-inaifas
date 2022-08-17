import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import useFetch from "../hooks/useFetch";

const config = require("../config.json");
export default function Fasilitas() {
  const { loading, error, data } = useFetch(
    `/api/sarana-prasaranas?populate=%2A`
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
          <title>Fasilitas PBA INAIFAS</title>
          <meta name="description" content="Visi misi PBA INAIFAS" />
          <link rel="canonical" href="http://localhost:3000/fasilitas" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 md:my-4 md:pb-4 lg:my-8 lg:pb-8">
        <div className="prose prose-sm prose-h1:text-second prose-h2:m-0 prose-h2:mb-3 tracking-wide max-w-none md:col-span-8 lg:prose-base lg:prose-h2:mt-0">
          <h1>Fasilitas</h1>
          <div className=" space-y-6 md:flex flex-wrap md:space-y-0">
            {data.data.map((fasilitas, i) => (
              <div key={fasilitas.id} className=" md:w-1/2 md:pr-6 md:py-4 lg:pr-8">
                <div className=" rounded-lg overflow-hidden bg-white drop-shadow-lg h-full break-words">
                  <div className="aspect-w-4 aspect-h-2 m-0">
                    <img
                      src={
                        config.url +
                        fasilitas.attributes.gambar.data.attributes.formats.small.url
                      }
                      alt={fasilitas.attributes.gambar.data.attributes.name}
                      className="object-cover m-0 lg:my-0"
                    />
                  </div>
                  <div className="p-5">
                    <h2>{fasilitas.attributes.judul}</h2>
                    <p>{fasilitas.attributes.isi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
