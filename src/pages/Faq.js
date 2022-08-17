import { Helmet, HelmetProvider } from "react-helmet-async";
import Aside from "../component/Aside";
import useFetch from "../hooks/useFetch";
import { Disclosure, Transition } from "@headlessui/react";
import { FaAngleUp } from "react-icons/fa";

export default function Faq() {
  const { loading, error, data } = useFetch(`/api/faqs?populate=%2A`);
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
          <title>FAQ PBA INAIFAS</title>
          <meta name="description" content="FAQ PBA INAIFAS" />
          <link rel="canonical" href="http://localhost:3000/faq" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>
      <div className="font-roboto container mx-auto text-slate700 my-2 pb-2 md:grid grid-cols-12 gap-6 md:my-4 md:pb-4 lg:my-8 lg:pb-8 lg:gap-8">
        <div className="prose prose-sm prose-h1:text-second prose-p:leading-tight prose-a:text-link tracking-wide max-w-none md:col-span-8 md:prose-base">
          <h1>FAQ</h1>
          <div className="space-y-2 lg:space-y-4">
            {data.data.map((faq) => (
              <Disclosure as="div" key={faq.id} className=" w-full border border-main bg-white rounded-md px-3 py-2 drop-shadow-md active:scale-95 transition-transform cursor-default">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="button"
                      className="font-bold text-second w-full flex justify-between items-center space-x-2 group"
                    >
                      <span className="text-left">
                        {faq.attributes.pertanyaan}
                      </span>
                      <span className="group-hover:text-orange group-active:text-orange">
                        <FaAngleUp className={`${open && "rotate-180"} transition-transform w-5 h-5`} />
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel as="div" className="pt-2">
                        <p className="text-left m-0 md:m-0">{faq.attributes.jawaban}</p>
                        {faq.attributes.pdf.data ? (
                          <a
                            href={faq.attributes.pdf.data.attributes.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            unduh
                          </a>
                        ) : (
                          ""
                        )}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
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
