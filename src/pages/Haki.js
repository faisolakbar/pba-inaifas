import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import useFetch from "../hooks/useFetch";

const config = require("../config.json");
export default function Haki() {
  const { loading, error, data } = useFetch(
    `/api/haki?populate[0]=daftar_haki&populate[1]=daftar_haki.sertifikat`
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
          <title>HAKI PBA INAIFAS</title>
          <meta name="description" content="HAKI PBA INAIFAS" />
          <link rel="canonical" href="http://localhost:3000/haki" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="prose prose-sm prose-h1:text-second tracking-wide max-w-none md:col-span-8 lg:prose-base">
          <h1>HAKI</h1>
          <div>
            <p>{data.data.attributes.isi}</p>
            <div className="overflow-x-scroll lg:overflow-x-hidden">
              <table className="table-auto lg:text-base">
                <thead className="border-y">
                  <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Deskripsi</th>
                    <th>Tahun</th>
                    <th>Sertifikat</th>
                  </tr>
                </thead>
                <tbody>
                {data.data.attributes.daftar_haki.map((daftar, i) => (
                    <tr className="border-y" key={daftar.id}>
                      <td>{i + 1}</td>
                      <td>{daftar.nama}</td>
                      <td>{daftar.deskripsi_haki}</td>
                      <td>{daftar.tahun}</td>
                      <td className="flex justify-center">
                        {daftar.sertifikat.data ? (
                          <a
                            href={
                              config.url +
                              daftar.sertifikat.data.attributes.url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link"
                          >
                            unduh
                          </a>
                        ) : (
                          <p>-</p>
                        )}
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10 md:hidden">
          <span className="h-[1px] w-3/4 bg-slate400"></span>
        </div>
        <div className="col-start-9 col-end-13">
          <Aside />
        </div>
      </div>
    </>
  );
}
