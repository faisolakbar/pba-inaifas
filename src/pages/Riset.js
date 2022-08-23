import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import DataRisetPendidikan from "../component/DataRisetPendidikan";
import useFetch from "../hooks/useFetch";

export default function Riset({kategori}) {
  const [tahun, setTahun] = useState("2021");
  const { loading, error, data } = useFetch(`/api/tahun-risets`);
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
          <title>Riset {kategori}</title>
          <meta
            name="description"
            content={`Riset ${kategori} Mahasiswa PBA INAIFAS`}
          />
          <link rel="canonical" href={`http://localhost:3000/riset-${kategori}`} />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 lg:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="prose prose-sm prose-h1:text-second prose-p:my-2 prose-p:leading-tight prose-a:my-2 tracking-wide max-w-none md:prose-base">
            <h1 className="capitalize">Riset {kategori}</h1>
          </div>
          <div className="mt-4 pt-2">
            {data.data.map((tahunRiset) => (
              <button
                key={tahunRiset.id}
                className={
                  `
              ${// eslint-disable-next-line
                tahunRiset.attributes.tahun === tahun ? "bg-main/90" : "bg-main/40"
              }` +
                  " py-1 px-2 mr-2 text-sm text-white rounded-full transition-colors duration-300"
                }
                onClick={() => setTahun(tahunRiset.attributes.tahun)}
              >
                {tahunRiset.attributes.tahun}
              </button>
            ))}
          </div>
          <DataRisetPendidikan tahun={tahun} kategori={kategori} />
          <div className="md:hidden flex justify-center my-10">
            <span className="h-[1px] w-3/4 bg-slate400"></span>
          </div>
        </div>
        <div className="col-start-9 col-end-13">
          <Aside />
        </div>
      </div>
    </>
  );
}
