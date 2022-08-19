import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import Pagination from "../component/Pagination";
import useFetch from "../hooks/useFetch";

export default function RisetPendidikan() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    ``
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
          <title>Riset Pendidikan</title>
          <meta
            name="description"
            content="Riset Pendidikan Mahasiswa PBA INAIFAS"
          />
          <link rel="canonical" href="http://localhost:3000/riset-pendidikan" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 lg:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="prose prose-sm prose-h1:text-second prose-p:my-2 prose-p:leading-tight prose-a:my-2 tracking-wide max-w-none md:prose-base">
            <h1>Riset Pendidikan</h1>
          </div>
          <Pagination data={data} page={page} setPage={setPage} />
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
