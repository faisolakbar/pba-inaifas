import footerlogo from "../assets/img/footer-logo-inaifas.png";
import { AlamatFooterData, EmailData, WhatsappData } from "./ContactData";

export default function Footer() {
  return (
    <div className="bg-second text-white py-8 text-sm font-light mt-5 lg:text-base">
      <div className="container text-center  mx-auto lg:flex lg:mb-0 lg:text-left justify-between items-start space-x-4">
        <div className="mb-4 block lg:w-1/3">
          <img src={footerlogo} alt="footerlogo" className="" />
        </div>

        <div className="lg:flex justify-center lg:w-1/3">
          <ul className="">
            <li className="mb-2 text-base">LINK</li>
            <li>
              <a
                className="hover:text-orange"
                href="https://inaifas.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                Situs INAIFAS
              </a>
            </li>
            <li>
              <a
                className="hover:text-orange"
                href=" https://siakad.inaifas.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                Siakad INAIFAS(K1)
              </a>
            </li>
            <li>
              <a
                className="hover:text-orange"
                href="https://siakad2.inaifas.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                Siakad INAIFAS(K2)
              </a>
            </li>
            <li>
              <a
                className="hover:text-orange"
                href="https://diglib.inaifas.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                Digital Library INAIFAS
              </a>
            </li>
            <li>
              <a
                className="hover:text-orange"
                href="https://ejournal.inaifas.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                Rumah Jurnal INAIFAS
              </a>
            </li>
            <li>
              <a
                className="hover:text-orange"
                href="https://pddikti.kemdikbud.go.id/"
                target="_blank"
                rel="noreferrer"
              >
                PD-Dikti
              </a>
            </li>
            <li>
              <a
                className="hover:text-orange"
                href="https://lamdik.or.id/"
                target="_blank"
                rel="noreferrer"
              >
                LAM Kependidikan
              </a>
            </li>
            <li>
              <a
                className="hover:text-orange"
                href=" https://www.banpt.or.id/"
                target="_blank"
                rel="noreferrer"
              >
                BAN-PT
              </a>
            </li>
          </ul>
        </div>
        <div className=" pt-4 lg:pt-0 lg:w-1/3">
          <h3 className="mb-2 text-base">Hubungi Kami :</h3>
          <p className="font-bold">Program Studi Pendidikan Bahasa Arab</p>
          <p>
            Fakultas Tarbiyah Institut Agama Islam Al-Falah
            As-Sunniyyah(INAIFAS)
          </p>
          <div className="my-2">
          <AlamatFooterData/>
          </div>
          <div className="flex space-x-3 md:justify-center lg:justify-start lg:space-x-4">
            <WhatsappData />
            <EmailData />
          </div>
        </div>
      </div>
    </div>
  );
}
