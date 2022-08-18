import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import useElementOnScreen from "../hooks/useElementOnScreen";

export default function ShowMoreButton({ category }) {
  const targetRef = useRef(null);
  const isVisible = useElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    },
    targetRef
  );
  return (
    <div className="flex justify-end py-3 cursor-default" ref={targetRef}>
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
        className={`${
          !isVisible
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100 transition-all duration-500"
        } cursor-pointer flex items-center space-x-1 p-1 text-main transition-all duration-200 hover:text-second text-sm hover:translate-x-2 md:text-base`}
      >
        <p className="capitalize">{category} lainnya</p>
        <FaArrowRight />
      </button>
    </div>
  );
}
