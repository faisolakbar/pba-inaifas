import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import Pagination from "../component/Pagination";
import useFetch from "../hooks/useFetch";

const config = require("../config.json");
export default function KerjaSama() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `/api/kerja-samas?populate=%2A&sort[0]=tahun%3Adesc&pagination[page]=${page}&pagination[pageSize]=6`
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
          <title>Kerjasama PBA INAIFAS</title>
          <meta name="description" content="Kerjasama PBA INAIFAS" />
          <link rel="canonical" href="http://localhost:3000/kerjasama" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 lg:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="prose prose-sm prose-h1:text-second prose-p:my-2 prose-p:leading-tight prose-a:my-2 tracking-wide max-w-none md:prose-base">
            <h1>Daftar Kerja Sama</h1>
            <div className="overflow-x-scroll">
              <table className="table-auto lg:text-base">
                <thead className="border-y">
                  <tr>
                    <th>No.</th>
                    <th>Tahun</th>
                    <th>Jenis Kerjasama</th>
                    <th>Mitra</th>
                    <th>Bidang Kerjasama</th>
                    <th className="w-fit">Deskripsi Kerjasama</th>
                    <th>Status</th>
                    <th>Unduh SPK</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((kerjasama, i) => (
                    <tr className="border-y" key={kerjasama.id}>
                      <td>{i + 1}</td>
                      <td>{kerjasama.attributes.tahun}</td>
                      <td>{kerjasama.attributes.jenis_kerjasama}</td>
                      <td>{kerjasama.attributes.mitra}</td>
                      <td>{kerjasama.attributes.bidang_kerjasama}</td>
                      <td>{kerjasama.attributes.deskripsi_kerjasama}</td>
                      <td>{kerjasama.attributes.status}</td>
                      <td className="flex justify-center">
                        {kerjasama.attributes.spk.data ? (
                          <a
                            href={
                              config.url +
                              kerjasama.attributes.spk.data.attributes.url
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
