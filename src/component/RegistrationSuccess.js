import { Dialog, Transition } from "@headlessui/react";

export default function RegistrationSuccess(props) {
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
            Daftar berhasil, silahkan <b className="text-main">gabung</b>{" "}
            untuk meninggalkan komentar
          </Dialog.Description>
          <button
            onClick={props.message}
            className=" py-1 px-3 bg-main rounded-md text-white tracking-wide transition-colors duration-700 hover:bg-second active:scale-95"
          >
            Tutup
          </button>
        </Dialog.Panel>
      </div>
    </Transition.Child>
  );
}
