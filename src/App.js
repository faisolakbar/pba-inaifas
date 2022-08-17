import { Route, Routes } from "react-router-dom";
import Copyright from "./component/Copyright";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import TentangPba from "./pages/TentangPBA";
import Footer from "./component/Footer";
import ArticleDetails from "./pages/ArticleDetails";
import ErrorPages from "./pages/ErrorPages";
import ShowMore from "./pages/ShowMore";
import VisiMisi from "./pages/VisiMisi";
import Struktur from "./pages/Struktur";
import Dosen from "./pages/Dosen";
import Akreditas from "./pages/Akreditas";
import Kurikulum from "./pages/Kurikulum";
import KalenderAkademik from "./pages/KalenderAkademik";
import JadwalKuliah from "./pages/JadwalKuliah";
import KerjaSama from "./pages/KerjaSama";
import Jurnal from "./pages/Jurnal";
import Buku from "./pages/Buku";
import Haki from "./pages/Haki";
import TracerStudy from "./pages/TracerStudy";
import Download from "./pages/Download";
import Fasilitas from "./pages/Fasilitas";
import JudulSkripsi from "./pages/JudulSkripsi";
import AktifLulusan from "./pages/AktifLulusan";
import Hmps from "./pages/Hmps";
import DaftarPPLPKM from "./pages/DaftarPPLPKM";
import DaftarUjianSkripsi from "./pages/DaftarUjianSkripsi";
import RisetKolaboratif from "./pages/RisetKolaboratif";
import LaporanTahunan from "./pages/LaporanTahunan";
import UnitPenjaminanMutu from "./pages/Unit_Penjaminan_Mutu";
import DokumenPenjaminanMutu from "./pages/Dokumen_Penjaminan_Mutu";
import Faq from "./pages/Faq";

function App() {

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPages/>}></Route>
        <Route path="/articledetails/:id/:slug" element={<ArticleDetails />} />
        <Route path="/kategori/berita" element={<ShowMore category="berita"/>}/>
        <Route path="/kategori/agenda" element={<ShowMore category="agenda"/>}/>
        <Route path="/kategori/pengumuman" element={<ShowMore category="pengumuman"/>}/>

        {/*profil*/}
        <Route path="/tentang-pba" element={<TentangPba />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/struktur" element={<Struktur />} />
        <Route path="/dosen" element={<Dosen />} />
        <Route path="/dosen/:id/:slug" element={<Dosen />} />
        <Route path="/akreditas" element={<Akreditas />} />

        {/*akademik*/}
        <Route path="/kurikulum" element={<Kurikulum />} />
        <Route path="/kalender-akademik" element={<KalenderAkademik />} />
        <Route path="/jadwal-kuliah" element={<JadwalKuliah />} />
        <Route path="/kerjasama" element={<KerjaSama />} />

        {/* faslilitas */}
        <Route path="/fasilitas" element={<Fasilitas />} />

        {/*mahasiswa*/}
        <Route path="/aktif-lulusan" element={<AktifLulusan />} />
        <Route path="/tracer-study" element={<TracerStudy />} />
        <Route path="/kategori/prestasi" element={<ShowMore category="prestasi"/>}/>
        <Route path="/hmps" element={<Hmps />} />

        {/*riset*/}
        <Route path="/judul-skripsi" element={<JudulSkripsi />} />
        <Route path="/riset-kolaboratif" element={<RisetKolaboratif />} />
        <Route path="/daftar-ppl-pkm" element={<DaftarPPLPKM />} />
        <Route path="/daftar-ujian-skripsi" element={<DaftarUjianSkripsi />} />

        {/*publikasi*/}
        <Route path="/jurnal" element={<Jurnal />} />
        <Route path="/buku" element={<Buku />} />
        <Route path="/haki" element={<Haki />} />

        {/*download*/}
        <Route path="/download" element={<Download />} />

        {/*penjaminan mutu*/}
        <Route path="/laporan-tahunan" element={<LaporanTahunan />} />
        <Route path="/unit-penjaminan-mutu" element={<UnitPenjaminanMutu />} />
        <Route path="/dokumen-penjaminan-mutu" element={<DokumenPenjaminanMutu />} />

        {/*penjaminan mutu*/}
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
