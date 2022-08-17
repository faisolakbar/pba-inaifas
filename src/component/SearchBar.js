import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import SearchData from "./SearchData";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  return (
    <>
      <div className="h-8 rounded-md overflow-hidden flex bg-white lg:border-2 lg:border-main lg:rounded-lg lg:h-10">
        <input
          className="w-full p-2 text-sm rounded-l-md outline-none bg-white"
          type="text"
          placeholder="Search..."
          onClick={() => setIsOpen(true)}
        />
        <button
          className="w-auto flex justify-end items-center p-2 text-main bg-white outline-0"
          onClick={() => setIsOpen(true)}
        >
          <FaSearch className="w-4 h-4" />
        </button>
      </div>
      <Transition appear show={isOpen} as="div">
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50 font-roboto"
        >
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-slate800/30 backdrop-blur-[1px]"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex items-center justify-center px-6">
              <Dialog.Panel className="relative p-8 text-sm w-full max-w-sm overflow-y-hidden rounded-md bg-white lg:max-w-xl">
                <div className="absolute right-2 top-2 rounded-full w-6 h-6 bg-orange drop-shadow-md text-white transition-transform duration-150 hover:scale-95">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="relative w-full h-full"
                  >
                    x
                  </button>
                </div>
                <div className="h-80 space-y-4 overflow-y-hidden">
                  <div className="h-8 mt-4 rounded-md flex items-center bg-white border border-slate400 lg:rounded-lg lg:h-10">
                    <input
                      className="w-full px-2 text-sm rounded-l-md outline-none bg-white"
                      type="text"
                      placeholder="Search..."
                      onChange={(e) => setFilter(e.target.value)}
                    />
                  </div>
                  {filter.length > 0 && (
                    <div className="h-full overflow-y-scroll">
                      <SearchData
                        filter={filter}
                        setIsOpen={setIsOpen}
                        setFilter={setFilter}
                      />
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
