import { Link } from "react-router-dom";

export const menuItemsData = [
  {
    title: "Beranda",
    link: (
      <Link
        className="w-full flex justify-start"
        to="/"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        Beranda
      </Link>
    ),
  },
  {
    title: "Profil",
    submenu: [
      {
        title: "Tentang PBA",
        link: (
          <Link to="/tentang-pba" className="dropdown-item">
            Tentang PBA
          </Link>
        ),
      },
      {
        title: "Visi-Misi",
        link: (
          <Link to="/visi-misi" className="dropdown-item">
            Visi-Misi
          </Link>
        ),
      },
      {
        title: "Struktur",
        link: (
          <Link to="/struktur" className="dropdown-item">
            Struktur
          </Link>
        ),
      },
      {
        title: "Dosen",
        link: (
          <Link to="/dosen" className="dropdown-item">
            Dosen
          </Link>
        ),
      },
      {
        title: "Akreditasi",
        link: (
          <Link to="/akreditas" className="dropdown-item">
            Akreditas
          </Link>
        ),
      },
    ],
  },
  {
    title: "Akademik",
    submenu: [
      {
        title: "Kurikulum",
        link: (
          <Link to="/kurikulum" className="dropdown-item">
            Kurikulum
          </Link>
        ),
      },
      {
        title: "Kalender Akademik",
        link: (
          <Link to="/kalender-akademik" className="dropdown-item">
            Kalender Akademik
          </Link>
        ),
      },
      {
        title: "Jadwal Kuliah",
        link: (
          <Link to="/jadwal-kuliah" className="dropdown-item">
            Jadwal kuliah
          </Link>
        ),
      },
      {
        title: "Kerjasama",
        link: (
          <Link to="/kerjasama" className="dropdown-item">
            Kerjasama
          </Link>
        ),
      },
    ],
  },
  {
    title: "Fasilitas",
    link: (
      <Link
        className="w-full flex justify-start"
        to="/fasilitas"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        Fasilitas
      </Link>
    ),
  },
  {
    title: "Mahasiswa",
    submenu: [
      {
        title: "Tracer Study",
        link: (
          <Link to="/tracer-study" className="dropdown-item">
            Tracer Study
          </Link>
        ),
      },
      {
        title: "Prestasi",
        link: (
          <Link to="/kategori/prestasi" className="dropdown-item">
            Prestasi
          </Link>
        ),
      },
      {
        title: "HMPS",
        link: (
          <Link to="/hmps" className="dropdown-item">
            HMPS
          </Link>
        ),
      },
    ],
  },
  {
    title: "Riset",
    submenu: [
      {
        title: "Judul Skripsi",
        link: (
          <Link to="/riset-pendidikan" className="dropdown-item">
            Riset Pendidkan
          </Link>
        ),
      },
      {
        title: "Riset Kolaboratif",
        link: (
          <Link to="/riset-pkm" className="dropdown-item">
            Riset PKM
          </Link>
        ),
      },
      {
        title: "Daftar PPL/PKM",
        link: (
          <Link to="/daftar-ppl-pkm" className="dropdown-item">
            Daftar PPL/PKM
          </Link>
        ),
      },
      {
        title: "Daftar Ujian Skripsi",
        link: (
          <Link to="/daftar-ujian-skripsi" className="dropdown-item">
            Daftar Ujian Skripsi
          </Link>
        ),
      },
    ],
  },
  {
    title: "Publikasi",
    submenu: [
      {
        title: "Jurnal",
        link: (
          <Link to="/jurnal" className="dropdown-item">
            Jurnal
          </Link>
        ),
      },
      {
        title: "Buku",
        link: (
          <Link to="/buku" className="dropdown-item">
            Buku
          </Link>
        ),
      },
      {
        title: "HAKI",
        link: (
          <Link to="/haki" className="dropdown-item">
            HAKI
          </Link>
        ),
      },
    ],
  },
  {
    title: "Download",
    link: (
      <Link
        className="w-full flex justify-start"
        to="/download"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        Download
      </Link>
    ),
  },
  {
    title: "Penjaminan Mutu",
    submenu: [
      {
        title: "Laporan Tahunan",
        link: (
          <Link to="/laporan-tahunan" className="dropdown-item">
            Laporan Tahunan
          </Link>
        ),
      },
      {
        title: "Penjaminan Mutu",
        link: (
          <Link to="/penjaminan-mutu" className="dropdown-item">
            Penjaminan Mutu
          </Link>
        ),
      },
    ],
  },
  {
    title: "FAQ",
    link: (
      <Link
        className="w-full flex justify-start"
        to="/faq"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        FAQ
      </Link>
    ),
  },
];

// export default {
//     MenuItems,
// }
