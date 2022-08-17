import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import Pagination from "../component/Pagination";
import useFetch from "../hooks/useFetch";

export default function JudulSkripsi() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `/api/judul-skripsis?populate=%2A&sort[0]=nama%3Aasc&pagination[page]=${page}&pagination[pageSize]=6`
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
          <title>Judul Skripsi</title>
          <meta
            name="description"
            content="Judul Skripsi Mahasiswa PBA INAIFAS"
          />
          <link rel="canonical" href="http://localhost:3000/judul-skripsi" />
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
                    <th>NIM</th>
                    <th>Nama</th>
                    <th>Judul</th>
                    <th>Dosen Pembimbing</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((judul, i) => (
                    <tr className="border-y" key={judul.id}>
                      <td>{i + 1}</td>
                      <td>{judul.attributes.nim}</td>
                      <td>{judul.attributes.nama}</td>
                      <td>{judul.attributes.judul}</td>
                      <td>
                        {judul.attributes.pembimbing.map((pembimbing, i) => (
                          <div key={i}>
                            {`${i + 1}.${pembimbing.nama}`}
                            <br />
                            <br />
                          </div>
                        ))}
                      </td>
                      <td>
                        tanggal pengajuan :{" "}
                        {judul.attributes.status.tgl_pengajuan}
                        <br />
                        <br />
                        lulus : {judul.attributes.status.tgl_lulus}
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
