import { useState } from "react";

export default function NavNew() {
  const [open, setOpen] = useState(false);
  const close = () => {
    window.onclick(() => setOpen(false));
  };
  return (
    <>
      <nav className="flex justify-end bg-main">
        <button onClick={() => setOpen(true)}
        className="active:outline-none"
        >click</button>
        {/* button full screen */}
        <button
          onClick={() => setOpen(false)}
          className={`${
            open === true ? "block" : "hidden"
          } active:outline-none fixed h-screen w-screen inset-0 z-[9999]`}
        >close me</button>

        <div
          className={`${
            open === true && "-translate-x-full"
          } fixed z-[10000] bg-main h-screen w-64 top-0 -right-full transition-transform duration-500`}
        >
          <div className="">
            <button onClick={() => setOpen(false)} className="active:outline-none">
              click
            </button>
          </div>
          <div>
            <ul>
              <li>Beranda</li>
              <li>Profil</li>
              <li>Akademik</li>
              <li>Fasilitas</li>
              <li>Mahasiswa</li>
              <li>Riset</li>
              <li>Publikasi</li>
              <li>Download</li>
              <li>Penjaminan Mutu</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
