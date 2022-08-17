import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import LoginSuccess from "./LoginSuccess";
import Logout from "./Logout";
import RegisterForm from "./Register";
import SendComment from "./SendComment";
import { FiLoader } from "react-icons/fi";

const config = require("../config.json");

const LoginForm = (props) => {
  let [success, setSuccess] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    identifier: "",
    password: "",
    all: "",
  });

  const [user, setUser] = useState({
    user: null,
    is_loggedIn: false,
    userName: "",
  });

  const handleClose = () => {
    setIsOpen(false);
    setErrorMessage("");
  };

  useEffect(() => {
    try {
      let user = JSON.parse(sessionStorage.getItem("user"));
      if (user) {
        setUser({
          ...user,
          is_loggedIn: true,
          userName: user.user.username,
        });
      } else {
        setUser({
          ...user,
          is_loggedIn: false,
        });
      }
    } catch (error) {}
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  let login = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    axios
      .post(`${config.url}/api/auth/local`, userData)
      .then((response) => {
        // Handle success.
        sessionStorage.setItem("user", JSON.stringify(response.data));
        // console.log(response.data);
        setSuccess(true);
        setUserData("");
        setIsOpen(false);
        setUser({
          ...user,
          is_loggedIn: true,
          userName: response.data.user.username,
        });
      })
      .catch((error) => {
        // Handle error.
        let warning = error.response;
        setLoading(false);
        console.log("An error occurred:", error.response);
        // if (warning)
        if (!userData.identifier && !userData.password) {
          return setErrorMessage({
            identifier: "email tidak boleh kosong!",
            password: "password tidak boleh kosong!",
          });
        } else if (!userData.identifier) {
          return setErrorMessage({ identifier: "email tidak boleh kosong!" });
        } else if (!userData.password) {
          return setErrorMessage({ password: "password tidak boleh kosong!" });
        } else if (
          warning.data.error.message === "Invalid identifier or password"
        ) {
          return setErrorMessage({ all: "email atau password tidak sesuai!" });
        }
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
          <LoginSuccess
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
          className="relative z-50"
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
              className="fixed inset-0 bg-slate800/40 backdrop-blur-[1px]"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex items-center justify-center px-6">
              <Dialog.Panel className="py-4 px-8 text-sm w-full max-w-sm rounded-md bg-white">
                <Dialog.Title className="text-xl">Gabung</Dialog.Title>

                <form onSubmit={login} className="mt-4">
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <label
                        className={`text-main`}
                      >
                        Email<span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="identifier"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className={`${
                          errorMessage.identifier
                            ? "border-red"
                            : "border-slate400"
                        } w-full p-1 rounded-md border outline-none`}
                      />
                      {errorMessage.identifier && (
                        <div className="text-red">
                          {errorMessage.identifier}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label
                        className={` text-main`}
                      >
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
                    {errorMessage.all && (
                      <div className="text-red text-center">
                        {errorMessage.all}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      type="submit"
                      onClick={(e) => {
                        login(e);
                      }}
                      className="relative tracking-wider py-2 px-3 drop-shadow-lg bg-main text-white rounded-md transition-colors hover:bg-second active:scale-95"
                    >
                      {loading ? (
                        <>
                          <FiLoader className="absolute inset-0 m-auto  animate-spin" />
                          <p className="opacity-0">Gabung</p>
                        </>
                      ) : (
                        "Gabung"
                      )}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
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
      {user.is_loggedIn ? (
        <div className="">
          <div className="mt-3 mb-1 flex justify-between">
            <p className="font-bold">{user.userName}</p>
            <Logout />
          </div>
          <SendComment changeDataComment={(e) => props.changeDataComment(e)} />
        </div>
      ) : (
        <div className="p-3 border-[1px] border-slate400 bg-white rounded-md space-y-2 drop-shadow-md">
          <p className="text-center">
            Untuk meninggalkan komentar, silahkan gabung atau daftar dahulu
          </p>
          <div className="flex space-x-1 justify-center items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="py-1 px-3 border rounded-md tracking-wide border-main transition-colors hover:bg-second hover:text-white hover:border-second active:scale-95"
            >
              Gabung
            </button>
            <span>atau</span>
            <RegisterForm />
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
