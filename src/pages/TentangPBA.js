import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import Aside from "../component/Aside";
import useFetch from "../hooks/useFetch";

export default function TentangPba() {
  const { loading, error, data } = useFetch(`/api/tentang-pba`);
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
          <title>Tentang PBA INAIFAS</title>
          <meta
            name="description"
            content="Profil, sejarah, visi, misi, dan tujuan PBA INAIFAS"
          />
          <link rel="canonical" href="http://localhost:3000/tentang-pba" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="prose prose-sm prose-h1:text-second prose-strong:text-base prose-strong:text-main tracking-wide max-w-none md:col-span-8 lg:prose-base">
          <ReactMarkdown children={data.data.attributes.isi} />
        </div>
        <div className="flex justify-center my-10 md:hidden">
          <span className="h-[1px] w-3/4 bg-slate400"></span>
        </div>
        <div className="col-start-9 col-end-13">
          <Aside />
        </div>
      </div>
    </>
  );
}
