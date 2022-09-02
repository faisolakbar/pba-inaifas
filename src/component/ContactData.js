import React from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import {BsEnvelope} from "react-icons/bs";
import useFetch from "../hooks/useFetch";

export function WhatsappData() {
  const { loading, error, data } = useFetch(
    `/api/kontaks?populate=%2A&filters[kategori_kontak][judul][$eq]=whatsapp`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      ''
    );
  }

  return (
    <>
      {data.data.map((wa) => (
        <React.Fragment key={wa.id}>
          <div className="flex items-center space-x-1  group ">
            <FaWhatsapp className="group-hover:text-orange group-active:text-second lg:h-5 lg:w-5" />
            <a
              className="font-light text-sm text-slate-600 group-hover:text-orange group-active:text-second"
              href={`https://${wa.attributes.link}`}
              target="_blank"
              rel="noreferrer"
            >
              {wa.attributes.isi}
            </a>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export function EmailData() {
  const { loading, error, data } = useFetch(
    `/api/kontaks?populate=%2A&filters[kategori_kontak][judul][$eq]=email`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      ''
    );
  }

  return (
    <>
      {data.data.map((email) => (
        <React.Fragment key={email.id}>
          <div className="flex items-center space-x-1 group">
            <BsEnvelope className="group-hover:text-orange group-active:text-second lg:h-5 lg:w-5" />
            <a
              className="font-light text-sm group-hover:text-orange group-active:text-second"
              href={`https://${email.attributes.link}`}
              target="_blank"
              rel="noreferrer"
            >
              {email.attributes.isi}
            </a>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export function AlamatData() {
  const { loading, error, data } = useFetch(
    `/api/kontaks?populate=%2A&filters[kategori_kontak][judul][$eq]=alamat`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      ''
    );
  }

  return (
    <>
      {data.data.map((alamat) => (
        <React.Fragment key={alamat.id}>
          <a
            href={`https://${alamat.attributes.link}`}
            target="_blank"
            className="group"
            rel="noreferrer"
          >
            <FaMapMarkerAlt className="group-hover:text-orange group-active:text-second " />
          </a>
        </React.Fragment>
      ))}
    </>
  );
}

export function AlamatFooterData() {
  const { loading, error, data } = useFetch(
    `/api/kontaks?populate=%2A&filters[kategori_kontak][judul][$eq]=alamat`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      ''
    );
  }

  return (
    <>
      {data.data.map((alamat) => (
        <React.Fragment key={alamat.id}>
          <address>
            {alamat.attributes.isi}
          </address>
        </React.Fragment>
      ))}
    </>
  );
}

export function YoutubeData() {
  const { loading, error, data } = useFetch(
    `/api/kontaks?populate=%2A&filters[kategori_kontak][judul][$eq]=youtube`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      ''
    );
  }

  return (
    <>
      {data.data.map((yt) => (
        <React.Fragment key={yt.id}>
        <a href={`https://${yt.attributes.link}`} target="_blank" className="group" rel="noreferrer">
          <FaYoutube className="group-hover:text-orange group-active:text-second " />
        </a>
        </React.Fragment>
      ))}
    </>
  );
}

export function TwitterData() {
  const { loading, error, data } = useFetch(
    `/api/kontaks?populate=%2A&filters[kategori_kontak][judul][$eq]=twitter`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      ''
    );
  }

  return (
    <>
      {data.data.map((twt) => (
        <React.Fragment key={twt.id}>
        <a href={`http://${twt.attributes.link}`} target="_blank" className="group" rel="noreferrer">
          <FaTwitter className="group-hover:text-orange group-active:text-second " />
        </a>
        </React.Fragment>
      ))}
    </>
  );
}

export function InstagramData() {
  const { loading, error, data } = useFetch(
    `/api/kontaks?populate=%2A&filters[kategori_kontak][judul][$eq]=instagram`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      ''
    );
  }

  return (
    <>
      {data.data.map((ig) => (
        <React.Fragment key={ig.id}>
        <a href={`http://${ig.attributes.link}`} target="_blank" className="group" rel="noreferrer">
          <FaInstagram className="group-hover:text-orange group-active:text-second " />
        </a>
        </React.Fragment>
      ))}
    </>
  );
}

export function FacebookData() {
  const { loading, error, data } = useFetch(
    `/api/kontaks?populate=%2A&filters[kategori_kontak][judul][$eq]=facebook`
  );
  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return (
      ''
    );
  }

  return (
    <>
      {data.data.map((fb) => (
        <React.Fragment key={fb.id}>
        <a href={`http://${fb.attributes.link}`} target="_blank" className="group" rel="noreferrer">
          <FaFacebookF className="group-hover:text-orange group-active:text-second " />
        </a>
        </React.Fragment>
      ))}
    </>
  );
}
