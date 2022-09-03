import { useParams } from "react-router-dom";
import {
  FacebookMessengerShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaWhatsapp,
  FaTwitter,
  FaTelegramPlane,
  FaFacebookF,
  FaFacebookMessenger,
} from "react-icons/fa";

const config = require("../config.json");
export default function ShareButton(props) {
  const params = useParams();
  const url = `${config.url}/articledetails/${params.id}/${params.slug}`;
  const judul = props.title;
  return (
    <>
      <div className="flex items-center py-2 space-x-1 border-b-[1px] border-slate400 text-slate700 text-sm lg:text-base">
        <p>Share: </p>
        <div className="flex items-center text-main space-x-3">
          <div className="hover:text-orange">
            <FacebookShareButton url={url} title={judul}>
              <FaFacebookF />
            </FacebookShareButton>
          </div>
          <div className="hover:text-orange">
            <FacebookMessengerShareButton url={url} title={judul}>
              <FaFacebookMessenger />
            </FacebookMessengerShareButton>
          </div>
          <div className="hover:text-orange">
            <WhatsappShareButton url={url} title={judul}>
              <FaWhatsapp />
            </WhatsappShareButton>
          </div>
          <div className="hover:text-orange">
            <TwitterShareButton url={url} title={judul}>
              <FaTwitter />
            </TwitterShareButton>
          </div>
          <div className="hover:text-orange">
            <TelegramShareButton url={url} title={judul}>
              <FaTelegramPlane />
            </TelegramShareButton>
          </div>
        </div>
      </div>
    </>
  );
}
