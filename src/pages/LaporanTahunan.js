import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import useFetch from "../hooks/useFetch";

const config = require("../config.json");
export default function LaporanTahunan() {
  const { loading, error, data } = useFetch(
    `/api/laporan-tahunans?populate=%2A&sort[0]=publishedAt%3Adesc`
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
          <title>Laporan Tahunan PBA INAIFAS</title>
          <meta name="description" content="Laporan Tahunan PBA INAIFAS" />
          <link
            rel="canonical"
            href="http://localhost:3000/laporan-tahunan"
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="prose prose-sm prose-h1:text-second prose-p:my-2 prose-p:leading-tight prose-a:my-2 tracking-wide max-w-none md:col-span-8 md:prose-base">
          <h1>Laporan Tahunan</h1>
          <div>
            <table className="table-auto lg:text-base">
              <tbody>
                {data.data.map((laporan) => (
                  <tr key={laporan.id}>
                    <td>{laporan.attributes.judul}</td>
                    <td className="flex justify-center">
                      {laporan.attributes.pdf.data ? (
                        <a
                          href={
                            config.url +
                            laporan.attributes.pdf.data.attributes.url
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
