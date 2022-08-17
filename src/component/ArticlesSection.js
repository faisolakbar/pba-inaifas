import { Link } from "react-router-dom";
import Agenda from "./Agenda";
import News from "./News";
import ShowMoreButton from "./ShowMoreButton";

export default function ArticlesSection() {
  return (
    <div className="container mx-auto mt-2 lg:mt-8 md:grid grid-cols-8 gap-x-8 lg:grid-cols-12 lg:grid-rows-1">
      <div className={` pb-4 col-span-8 lg:col-span-4`}>
        <div className="h-full flex flex-col justify-between">
          <News>berita</News>
          <Link to="/kategori/berita"><ShowMoreButton category={"berita"}/></Link>
        </div>
      </div>
      <div className="pb-4 col-span-4 lg:col-start-5 lg:col-end-9">
        <div className="md:h-full flex flex-col justify-between">
          <Agenda />
          <Link to="/kategori/agenda"><ShowMoreButton category={"agenda"}/></Link>
        </div>
      </div>
      <div className="pb-4 col-start-5 col-end-9 lg:col-start-9 lg:col-end-13">
        <div className="h-full flex flex-col justify-between">
          <News>pengumuman</News>
          <Link to="/kategori/pengumuman"><ShowMoreButton category={"pengumuman"}/></Link>
        </div>
      </div>
    </div>
  );
}
