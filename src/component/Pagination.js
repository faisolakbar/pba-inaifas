import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Pagination({ tahun, data, page, setPage }) {
  const pagination = (p) => {
    setPage(p);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);

  useEffect(() => {
    pagination(1);
    // eslint-disable-next-line
  }, [tahun]);
  return (
    <div className="flex justify-center my-8 space-x-2 text-slate500 lg:text-lg lg:space-x-4 lg:my-12">
      <button
        className={`underline ${
          page === 1
            ? "text-slate500"
            : "text-main hover:text-second transition-all "
        }`}
        disabled={page === 1}
        onClick={() => pagination(1)}
      >
        {""}
        Awal
      </button>
      <button
        className={`${
          page === 1
            ? "text-slate500"
            : "text-main hover:-translate-x-1 hover:text-second transition-all "
        }`}
        disabled={page === 1}
        onClick={() => pagination(page - 1)}
      >
        <FaAngleLeft />
      </button>
      <span>{`${page} of ${data.data && data.meta.pagination.pageCount}`}</span>
      <button
        className={`${
          page === (data.data && data.meta.pagination.pageCount)
            ? "text-slate500"
            : "text-main hover:translate-x-1 hover:text-second transition-all "
        }`}
        disabled={page === (data.data && data.meta.pagination.pageCount)}
        onClick={() => pagination(page + 1)}
      >
        <FaAngleRight />
      </button>
      <button
        className={`underline ${
          page === data.meta.pagination.pageCount
            ? "text-slate500"
            : "text-main hover:text-second transition-all "
        }`}
        disabled={page === data.meta.pagination.pageCount}
        onClick={() => pagination(data.meta.pagination.pageCount)}
      >
        Akhir
      </button>
    </div>
  );
}
