import {
  AlamatData,
  EmailData,
  FacebookData,
  InstagramData,
  TwitterData,
  WhatsappData,
  YoutubeData,
} from "./ContactData";

export default function Contact() {
  return (
    <div className="flex place-content-center whitespace-nowrap space-x-2 text-white lg:space-x-8 lg:pt-8 lg:place-content-start lg:text-slate800">
      {/* whatsapp pba */}
      <WhatsappData />
      {/* email pba */}
      <EmailData />
      {/* other */}
      <div className="hidden  space-x-6 lg:flex items-center">
        {/* map */}
        <AlamatData />
        {/* youtube */}
        <YoutubeData />
        {/* twitter */}
        <TwitterData />
        {/* instagram */}
        <InstagramData />
        {/* fb */}
        <FacebookData />
      </div>
    </div>
  );
}
