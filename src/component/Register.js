import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import RegistrationSuccess from "./RegistrationSuccess";

const config = require("../config.json");

const RegisterForm = () => {
  let [success, setSuccess] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    setUserData("");
    setErrorMessage("");
  };

  const Register = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    axios
      .post(`${config.url}/api/auth/local/register`, userData)
      .then((response) => {
        //success
        setUserData("");
        setIsOpen(false);
        setSuccess(true);
        setLoading(false);
        setErrorMessage("");

        // console.log("User profile", response.data.user);
        // console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        //error
        // console.log("An error occured:", error.response);
        let warning = error.response;
        setLoading(false);
        //warning semua form kosong
        if (!userData.username && !userData.email && !userData.password) {
          return setErrorMessage({
            username: "nama tidak boleh kosong!",
            email: "email tidak boleh kosong!",
            password: "password tidak boleh kosong!",
          });
        }
        //warning nama
        else if (!userData.username) {
          return setErrorMessage({ username: "nama tidak boleh kosong!" });
        } else if (userData.username.length < 3) {
          return setErrorMessage({ username: "nama terlalu pendek!" });
        }
        //warning email
        else if (!userData.email) {
          return setErrorMessage({ email: "email tidak boleh kosong!" });
        } else if (
          warning.data.error.message === "email must be a valid email"
        ) {
          return setErrorMessage({ email: "email tidak valid!" });
        } else if (warning.data.error.message === "Email is already taken") {
          return setErrorMessage({ email: "email sudah ada!" });
        }
        //warning password
        else if (!userData.password) {
          return setErrorMessage({ password: "password tidak boleh kosong!" });
        } else if (userData.password.length < 6) {
          return setErrorMessage({ password: "password kurang panjang!" });
        } else{
          return setErrorMessage({username: "nama sudah ada!"})
        }

        // setErrorMessage("");
      });
  };

  return (
    <>
      <Transition appear show={success} as="div">
        <Dialog
          open={success}
          onClose={() => setSuccess(false)}
          className="relative z-50 font-roboto"
        >
          <RegistrationSuccess
            message={() => {
              setSuccess(false);
            }}
          />
        </Dialog>
      </Transition>
      <Transition appear show={isOpen} as="div">
        <Dialog
          open={isOpen}
          onClose={() => handleClose()}
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
              className="fixed inset-0 bg-slate800/30 backdrop-blur-[0.5px]"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex items-center justify-center px-6">
              <Dialog.Panel className="py-4 px-8 text-sm w-full max-w-sm rounded-md bg-white">
                <Dialog.Title className="text-xl">Buat Akun</Dialog.Title>
                <form onSubmit={Register} className="mt-4">
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <label className={`text-main`}>
                        Nama<span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="username"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className={`${
                          errorMessage.username
                            ? "border-red"
                            : "border-slate400"
                        } w-full p-1 rounded-md border outline-none`}
                      />
                      {errorMessage.username && (
                        <div className="text-red">{errorMessage.username}</div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className={`text-main`}>
                        Email<span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className={`${
                          errorMessage.email ? "border-red" : "border-slate400"
                        } w-full p-1 rounded-md border outline-none`}
                      />
                      {errorMessage.email && (
                        <div className="text-red">{errorMessage.email}</div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className={`text-main`}>
                        Password<span className="text-red">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className={`${
                          errorMessage.password
                            ? "border-red"
                            : "border-slate400"
                        } w-full p-1 rounded-md border outline-none`}
                      />
                      {errorMessage.password && (
                        <div className="text-red">{errorMessage.password}</div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      type="submit"
                      onClick={(e) => {
                        Register(e);
                      }}
                      className="relative tracking-wider py-2 px-3 drop-shadow-lg bg-main text-white rounded-md transition-colors hover:bg-second active:scale-95"
                    >
                      {loading ? (
                        <>
                          <FiLoader className="absolute inset-0 m-auto  animate-spin" />
                          <p className="opacity-0">Daftar</p>
                        </>
                      ) : (
                        "Daftar"
                      )}
                    </button>
                    <button
                      onClick={() => handleClose()}
                      className="tracking-wider py-2 px-3 border border-main rounded-md transition-colors hover:bg-second hover:text-white hover:border-second active:scale-95"
                    >
                      Batal
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
      <button
        onClick={() => setIsOpen(true)}
        className="py-1 px-3 border border-main rounded-md text-white bg-main tracking-wide transition-colors hover:bg-second hover:border-second active:scale-95"
      >
        Daftar
      </button>
    </>
  );
};

export default RegisterForm;
