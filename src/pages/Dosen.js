import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import DataDosenCard from "../component/DataDosenCard";
import useFetch from "../hooks/useFetch";

export default function Dosen() {
  const { loading, error, data } = useFetch(`/api/data-dosens?populate=%2A`);
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
          <title>Dosen PBA INAIFAS</title>
          <meta name="description" content="Dosen PBA INAIFAS" />
          <link rel="canonical" href="http://localhost:3000/dosen" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 md:my-4 md:pb-4 lg:my-8 lg:pb-8">
        <div className=" md:col-span-8">
          <div className="prose prose-sm prose-h1:text-second tracking-wide max-w-none lg:prose-base md:pr-6 lg:pr-8">
            <h1>Dosen Program Studi Pendidikan Bahasa Arab</h1>
          </div>
          <DataDosenCard data={data} />
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
