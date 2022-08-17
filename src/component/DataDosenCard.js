import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

export default function DataDosenCard({ data }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="space-y-4 mt-6 text-sm tracking-wide md:flex flex-row flex-wrap md:space-y-0 lg:text-base">
        {data.data.map((dosen) => (
          <div key={dosen.id} className="md:w-[50%] md:pr-6 md:py-4 lg:pr-8">
            <Link to={`/dosen/${dosen.id}/${dosen.attributes.slug}`}>
              <div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer flex flex-col justify-between p-3 border border-main bg-white drop-shadow-lg rounded-sm space-y-6 transition-all active:scale-95 active:rounded-md active:drop-shadow-none group md:h-full lg:p-5 "
              >
                <div className="space-y-6 lg:flex items-start lg:space-y-0 lg:space-x-6">
                  <div className="w-full flex justify-center lg:justify-start lg:w-fit">
                    <div className="h-16 w-16 p-1 rounded-full border border-main">
                      <img
                        src={
                          dosen.attributes.gambar.data.attributes.url
                        }
                        alt={dosen.attributes.gambar.data.attributes.name}
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-start px-4">
                    <ul className="list-disc">
                      <li>{dosen.attributes.nama}</li>
                      {dosen.attributes.jabatan_struktural && (
                        <li>{dosen.attributes.jabatan_struktural}</li>
                      )}
                      {dosen.attributes.jabatan_fungsional && (
                        <li>{dosen.attributes.jabatan_fungsional}</li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="underline group-hover:text-orange"
                  >
                    detail
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Transition appear show={isOpen} as="div">
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50 font-roboto"
        >
          <Pop setIsOpen={setIsOpen} />
        </Dialog>
      </Transition>
    </>
  );
}

export function Pop({ setIsOpen }) {
  const params = useParams();
  const { loading, error, data } = useFetch(
    `/api/data-dosens/${params.id}?populate=%2A`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }

  return (
    <Transition.Child
      as="div"
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="fixed inset-0 bg-slate800/30 backdrop-blur-[1ypx]"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center px-6">
        <Dialog.Panel className="relative flex flex-col items-center pt-8 p-4 space-y-2 text-sm text-slate700 w-full max-w-sm h-80 rounded-md bg-white lg:h-max">
          {!loading ? (
            <FaSpinner className="animate-spin text-orange" />
          ) : (
            <>
              <div className="absolute right-2 top-2 rounded-full w-6 h-6 bg-orange drop-shadow-md text-white transition-transform duration-150 hover:scale-95">
                <button
                  onClick={() => setIsOpen(false)}
                  className="relative w-full h-full"
                >
                  x
                </button>
              </div>
              <Dialog.Title className="text-lg font-bold text-second">
                {data.data.attributes.nama}
              </Dialog.Title>
              <div className="space-y-4 overflow-y-scroll lg:overflow-y-hidden">
                <div className="w-16 h-16 aspect-1 p-1 rounded-full border border-main m-auto">
                  <img
                    src={
                      data.data.attributes.gambar.data.attributes.url
                    }
                    alt={data.data.attributes.gambar.data.attributes.name}
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-start space-y-1">
                  <p>
                    <b className="text-second">Tempat, Tanggal Lahir: </b>{" "}
                    {data.data.attributes.ttl}
                  </p>
                  <p>
                    <b className="text-second">Alamat: </b>{" "}
                    {data.data.attributes.alamat}
                  </p>
                  <p>
                    <b className="text-second">Homebase: </b>{" "}
                    {data.data.attributes.homebase}
                  </p>
                  <>
                    <b className="text-second">pendidikan: </b>
                    {data.data.attributes.pendidikan.map((pendidikan) => (
                      <p key={pendidikan.id}>{pendidikan.daftar_pendidikan}</p>
                    ))}
                  </>
                  <p>
                    <b className="text-second">NIY: </b>{" "}
                    {data.data.attributes.niy}
                  </p>
                  <p>
                    <b className="text-second">NIDN: </b>{" "}
                    {data.data.attributes.nidn}
                  </p>
                  <p>
                    <b className="text-second">Jab. Struktural: </b>{" "}
                    {data.data.attributes.jabatan_struktural}
                  </p>
                  <p>
                    <b className="text-second">Jab. Fungsional: </b>{" "}
                    {data.data.attributes.jabatan_fungsional}
                  </p>
                  <p>
                    <b className="text-second">Bid. Keahlian: </b>{" "}
                    {data.data.attributes.bidang_keahlian}
                  </p>
                  <p>
                    <b className="text-second">email: </b>{" "}
                    {data.data.attributes.email}
                  </p>
                  {data.data.attributes.google_scholar_link ? (
                    <a
                      href={data.data.attributes.google_scholar_link}
                      target="_blank"
                      className="underline text-main"
                      rel="noreferrer"
                    >
                      <b>Google Scholar id: </b>
                      {data.data.attributes.google_scholar_id}
                    </a>
                  ) : (
                    <p>
                      <b>Google Scholar id: </b>{data.data.attributes.google_scholar_id}
                    </p>
                  )}
                  {data.data.attributes.sinta_link ? (
                    <a
                      href={data.data.attributes.sinta_link}
                      target="_blank"
                      className="underline text-main"
                      rel="noreferrer"
                    >
                      <b>Sinta id: </b>
                      {data.data.attributes.sinta_id}
                    </a>
                  ) : (
                    <p>
                      <b>Sinta id: </b>{data.data.attributes.sinta_id}
                    </p>
                  )}
                  {data.data.attributes.publon_link ? (
                    <a
                      href={data.data.attributes.publon_link}
                      target="_blank"
                      className="underline text-main"
                      rel="noreferrer"
                    >
                      <b>Publon id: </b>
                      {data.data.attributes.publon_id}
                    </a>
                  ) : (
                    <p>
                      <b>Publon id: </b>{data.data.attributes.publon_id}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </Dialog.Panel>
      </div>
    </Transition.Child>
  );
}
