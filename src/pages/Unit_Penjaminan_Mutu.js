import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import useFetch from "../hooks/useFetch";
import ReactMarkdown from "react-markdown";

export default function UnitPenjaminanMutu() {
  const { loading, error, data } = useFetch(
    `/api/unit-penjaminan-mutu?populate=%2A&sort[0]=publishedAt%3Adesc`
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
          <title>Unit Penjaminan Mutu PBA INAIFAS</title>
          <meta name="description" content="Unit Penjaminan Mutu PBA INAIFAS" />
          <link
            rel="canonical"
            href="http://localhost:3000/unit-penjaminan-mutu"
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="prose prose-sm prose-h1:text-second prose-p:my-2 prose-p:leading-tight prose-a:my-2 prose-a:text-link tracking-wide max-w-none md:col-span-8 md:prose-base">
          <h1>Unit Penjaminan Mutu PBA INAIFAS</h1>
          <div>
            <ReactMarkdown children={data.data.attributes.isi}/>
            {data.data.attributes.pdf.data ? ( <a href={data.data.attributes.pdf.data.attributes.url} target="_blank" rel="noopener noreferrer">unduh</a> ) : ("")}
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
