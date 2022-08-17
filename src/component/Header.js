import { Link } from "react-router-dom";
import logoPbaHeader from "../assets/img/logo-pba.png";
import logoKampusMerdeka from "../assets/img/logo-kampus-merdeka.png";
import Contact from "./Contact";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="container mx-auto">
      <div className="hidden lg:block">
        <Contact />
      </div>

      {/* logo etc */}
      <div className="grid grid-cols-4 gap-x-4 gap-y-2 items-center pt-4 md:grid-cols-6 lg:grid-rows-1 lg:grid-cols-12 lg:pt-8">
        {/* logo pba */}
        <div className="col-span-3 md:col-span-4 lg:col-span-5">
          <Link to="/">
            <img src={logoPbaHeader} alt="logo-pba" className="" />
          </Link>
        </div>
        {/* logo kampus merdeka */}
        <div className="md:col-start-6 lg:col-start-7 lg:col-end-9">
          <img src={logoKampusMerdeka} alt="logo-pba" className="" />
        </div>
        <div className="hidden lg:block lg:col-start-10 lg:col-end-13">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
