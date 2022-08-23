import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Pagination from "./Pagination";

export default function DataRisetPendidikan({ tahun, kategori }) {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `/api/riset-${kategori}s?populate=%2A&sort[0]=publishedAt%3Adesc&filters[tahun_riset][tahun][$eq]=${tahun}&pagination[page]=${page}&pagination[pageSize]=10`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return "";
  }

  return (
    <div className="prose prose-sm prose-p:my-2 prose-p:leading-tight tracking-wide max-w-none md:prose-base">
      <div className="overflow-x-scroll">
        <table className="table-auto text-sm lg:text-base">
          <React.Fragment>
            <thead>
              <tr className="border-y">
                <th className="">Peneliti</th>
                <th>Judul Riset Pendidikan</th>
              </tr>
            </thead>
            {data.data.map((riset) => (
              <tbody key={riset.id}>
                <tr className="border-y">
                  <td className="">
                    {riset.attributes.peneliti.map((nama, id) => (
                      <li key={id}>{nama.nama}</li>
                    ))}
                  </td>
                  <td>{riset.attributes.judul_riset}</td>
                </tr>
              </tbody>
            ))}
          </React.Fragment>
        </table>
      </div>
      <Pagination tahun={tahun} data={data} page={page} setPage={setPage} />
    </div>
  );
}
