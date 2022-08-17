import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import { FiLoader } from "react-icons/fi";

const config = require("../config.json");

const SendComment = (props) => {
  const [isi, setIsi] = useState("");
  const [alert, setAlert] = useState({
    status: false,
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    user: "",
    token: "",
  });
  const params = useParams();

  useEffect(() => {
    try {
      let user = JSON.parse(sessionStorage.getItem("user"));
      if (user) {
        setCurrentUser({
          user: user,
          token: user.jwt,
        });
      }
    } catch (error) {}
  }, []);

  let comment = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!isi) {
      setAlert({
        status: true,
        text: "Komentar Jangan Kosong!",
      });
    }
    axios
      .post(
        `${config.url}/api/comments/api::artikel.artikel:${params.id}`,
        {
          author: {
            id: currentUser.user.id,
            name: currentUser.user.username,
            email: currentUser.email,
          },
          content: isi,
        },
        {
          headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${currentUser.token}`,
          },
        }
      )
      .then((response) => {
        setIsi("");
        props.changeDataComment(response);
        setLoading(false);
        setAlert({ status: false });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
      });
  };
  return (
    <>
      <form
        onSubmit={comment}
        className={`flex items-center justify-center space-x-2 bg-white rounded-md overflow-hidden border ${
          alert.status ? "border-red" : "border-slate400"
        }`}
      >
        <textarea
          style={{ resize: "none" }}
          rows="3"
          type="text"
          name="comment"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          className={` w-full p-1  outline-none`}
        />
        <div className="flex place-content-center box-border ">
          <button
            type="submit"
            onClick={(e) => {
              comment(e);
            }}
            className="text-lg py-2 px-4 text-main transition-colors duration-700 hover:text-second active:scale-95"
          >
            {loading ? <FiLoader className="animate-spin" /> : <IoSend />}
          </button>
        </div>
      </form>
      {alert.status && <p className="text-red text-xs">{alert.text}</p>}
    </>
  );
};

export default SendComment;
