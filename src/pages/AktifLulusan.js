import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";

export default function AktifLulusan() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mahasiswa Aktif/Lulusan PBA INAIFAS</title>
          <meta
            name="description"
            content="Jumlah Mahasiswa Aktif/Lulusan PBA INAIFAS"
          />
          <link rel="canonical" href="http://localhost:3000/aktif-lulusan" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="prose prose-sm prose-h1:text-second prose-p:my-2 prose-p:leading-tight prose-a:my-2 tracking-wide max-w-none md:col-span-8 md:prose-base">
          <h1>Mahasiswa Aktif/Lulusan</h1>
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
