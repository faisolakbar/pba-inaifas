import { Dialog, Transition } from "@headlessui/react";

export default function LoginSuccess(props) {
  return (
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
        className="fixed inset-0 bg-slate800/30 backdrop-blur-[0.5px]"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center px-6">
        <Dialog.Panel className="flex flex-col items-center space-y-4 p-6 text-sm w-full max-w-sm rounded-md bg-white">
          <Dialog.Description className="text-center tracking-wide">
            Berhasil gabung, <b className="text-main">bijaklah berkomentar</b>
          </Dialog.Description>
          <button
            onClick={props.message}
            className=" py-1 px-3 bg-main rounded-md text-white border-2 border-main transition-colors duration-700 tracking-wide outline-none hover:bg-second hover:border-second active:scale-95"
          >
            Tutup
          </button>
        </Dialog.Panel>
      </div>
    </Transition.Child>
  );
}
