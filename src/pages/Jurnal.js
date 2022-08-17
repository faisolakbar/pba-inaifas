import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import Aside from "../component/Aside";
import useFetch from "../hooks/useFetch";

const config = require("../config.json");
export default function Jurnal() {
  const { loading, error, data } = useFetch(`/api/jurnals?populate=%2A`);
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
          <title>Jurnal PBA INAIFAS</title>
          <meta name="description" content="Jurnal PBA INAIFAS" />
          <link rel="canonical" href="http://localhost:3000/jurnal" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="prose prose-sm prose-headings:text-second prose-a:text-link tracking-wide max-w-none md:col-span-8 lg:prose-base">
          <h1>Jurnal</h1>

          <div className="divide-y-[1px] divide-slate400">
            {data.data.map((jurnal) => (
              <div key={jurnal.id} className="my-8">
                <h2>{jurnal.attributes.judul}</h2>
                <div>
                  <img
                    src={
                      config.url +
                      jurnal.attributes.gambar.data.attributes.formats.medium
                        .url
                    }
                    alt={jurnal.attributes.gambar.data.attributes.name}
                    className="md:max-w-[15rem] md:float-left md:m-0 md:mr-2 lg:max-w-[20rem] lg:my-0 lg:mr-8 lg:mb-8"
                  />
                  <ReactMarkdown children={jurnal.attributes.isi} />
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
