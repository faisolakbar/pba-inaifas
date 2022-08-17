import { HelmetProvider, Helmet } from "react-helmet-async";
import ArticlesSection from "../component/ArticlesSection";
import Banner from "../component/Carousel";
import Testimoni from "../component/Testimoni";

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            PBA INAIFAS - Pendidikan Bahasa Arab INAIFAS Kencong Jember
          </title>
          <meta
            name="description"
            content="PBA INAIFAS - Website resmi Program Studi Pendidikan Bahasa Arab Institut Agama Islam Al-Falah As-Sunniyah Kencong Jember."
          />
          <link rel="canonical" href="http://localhost:3000" />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="PBA INAIFAS - Pendidikan Bahasa Arab INAIFAS Kencong Jember"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:description"
            content="PBA INAIFAS - Website resmi Program Studi Pendidikan Bahasa Arab Institut Agama Islam Al-Falah As-Sunniyah Kencong Jember."
          />
          <meta
            property="og:image"
            content="http://localhost:3000/src/assets/img/header-logo-pba.png"
          />
          <meta property="og:url" content="http://localhost:3000" />
          <meta
            property="og:site_name"
            content="Program Studi Pendidikan Bahasa Arab INAIFAS Kencong Jember"
          />
          <meta
            name="twitter:title"
            content="PBA INAIFAS - Pendidikan Bahasa Arab INAIFAS Kencong Jember"
          />
          <meta
            name="twitter:description"
            content="PBA INAIFAS - Website resmi Program Studi Pendidikan Bahasa Arab Institut Agama Islam Al-Falah As-Sunniyah Kencong Jember."
          />
          <meta
            name="twitter:image"
            content="http://localhost:3000/src/assets/img/header-logo-pba.png"
          />
          <meta
            name="twitter:site"
            content="PBA INAIFAS - Pendidikan Bahasa Arab INAIFAS Kencong Jember"
          />
          <meta name="twitter:creator" content="PBA INAIFAS" />
        </Helmet>
      </HelmetProvider>
      <Banner />
      <ArticlesSection />
      <Testimoni />
    </>
  );
}
