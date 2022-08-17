import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import useFetch from "../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import React from "react";

export default function Kurikulum() {
  const { loading, error, data } = useFetch(
    `/api/kurikulums?populate[0]=semester&populate[1]=semester.matkul`
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
          <title>Kurikulum PBA INAIFAS</title>
          <meta name="description" content="Kurikulum PBA INAIFAS" />
          <link rel="canonical" href="http://localhost:3000/kurikulum" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="prose prose-sm prose-h1:text-second prose-li:list-none tracking-wide max-w-none md:col-span-8 lg:prose-base">
          <h1>Kurikulum</h1>
          <div>
            {data.data.map((kurikulum) => (
              <div key={kurikulum.id}>
                <ReactMarkdown children={kurikulum.attributes.isi} />
                  <table className="table-auto  lg:text-base">
                    <thead className="border-y">
                      <tr>
                        <th>Kode Mata Kuliah</th>
                        <th>Nama Mata Kuliah</th>
                        <th>SKS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kurikulum.attributes.semester.map((semester) => (
                        <React.Fragment key={semester.id}>
                          <tr className="border-y bg-main/10">
                            <td></td>
                            <td className="capitalize font-bold">
                              {semester.semester}
                            </td>
                            <td></td>
                          </tr>
                          {semester.matkul.map((matkul) => (
                            <tr key={matkul.id}>
                              <td>{matkul.kode}</td>
                              <td>{matkul.nama}</td>
                              <td>{matkul.sks}</td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                      <tr className="capitalize font-bold">
                        <td></td>
                        <td>Total SKS</td>
                        <td>{kurikulum.attributes.total}</td>
                      </tr>
                    </tbody>
                  </table>
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
