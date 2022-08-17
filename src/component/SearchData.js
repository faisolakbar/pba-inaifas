import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function SearchData({ filter, setIsOpen, setFilter }) {
  const { loading, error, data } = useFetch(
    `/api/artikels?filters[judul][$containsi]=${filter}&sort[0]=publishedAt%3Adesc`
  );
  const click = () => {
    setIsOpen(false);
    setFilter("");
  };

  if (error !== null) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="pb-28">
      {!loading ? (
        <div className="flex justify-center">
          <FaSpinner className="animate-spin text-orange" />
        </div>
      ) : (
        <>
          {data.meta.pagination.total === 0 ? (
            <p className="flex justify-center text-slate400">
              Data Tidak Ditemukan
            </p>
          ) : (
            <div>
              {data.data.map((artikels) => (
                <div
                  key={artikels.id}
                  className="cursor-pointer py-2 border-b border-slate400"
                  onClick={() => click()}
                >
                  <Link
                    to={`/articledetails/${artikels.id}/${artikels.attributes.slug}`}
                  >
                    <h3 className="text-sm text-second hover:text-orange">
                      {artikels.attributes.judul}
                    </h3>
                    <p className="hidden md:block line-clamp-2 text-xs text-slate500">
                      {new Date(
                        artikels.attributes.publishedAt
                      ).toLocaleDateString("in-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
