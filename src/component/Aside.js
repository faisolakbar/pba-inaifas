import Agenda from "./Agenda";
import AsideNews from "./AsideNews";
import ShowMoreButton from "./ShowMoreButton";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <div className="space-y-6">
      <div className="mt-3 text-lg md:mt-0">
        <AsideNews category="berita"></AsideNews>
        <Link to="/kategori/berita"><ShowMoreButton category={"berita"}/></Link>
      </div>
      <div className="mt-3 text-lg lg:mt-0 lg:pt-4">
        <Agenda/>
        <Link to="/kategori/agenda"><ShowMoreButton category={"agenda"}/></Link>
      </div>
      <div className="mt-3 text-lg lg:mt-0 lg:pt-4">
        <AsideNews category="pengumuman"></AsideNews>
        <Link to="/kategori/pengumuman"><ShowMoreButton category={"pengumuman"}/></Link>
      </div>
    </div>
  );
}
