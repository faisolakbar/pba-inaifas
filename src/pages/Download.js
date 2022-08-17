import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Pagination from "../component/Pagination";

const config = require("../config.json");
export default function Download() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `/api/downloads?populate=%2A&sort[0]=publishedAt%3Adesc&pagination[page]=${page}&pagination[pageSize]=20`
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
          <title>Download PBA INAIFAS</title>
          <meta name="description" content="Download PBA INAIFAS" />
          <link rel="canonical" href="http://localhost:3000/download" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="md:col-span-8">
          <div className="prose prose-sm prose-headings:text-second prose-a:text-link prose-a:target:_blank tracking-wide max-w-none lg:prose-base">
            <h1>Download</h1>
            <div>
              <table className="table-auto lg:text-base">
                <tbody>
                  {data.data.map((download) => (
                    <tr key={download.id}>
                      <td>{download.attributes.judul}</td>
                      <td className="flex justify-center ">
                        {download.attributes.pdf.data ? (
                          <a
                            href={
                              config.url +
                              download.attributes.pdf.data.attributes.url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link"
                          >
                            unduh
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination data={data} page={page} setPage={setPage} />
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
