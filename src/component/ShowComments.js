import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function ShowComment(props) {
  const params = useParams();
  const { loading, error, data } = useFetch(
    `/api/comments/api::artikel.artikel:${params.id}?sort[0]=createdAt%3Adesc`
  );

  if (error !== null) {
    return <div>{error.message}</div>;
  }
  if (!loading) {
    return "";
  }

  return (
    <>
      {[...props.data, ...data].map((comment) => (
        <React.Fragment key={comment.id}>
          {!comment.blocked && (
            <div className="flex items-start mb-2 space-x-2">
              <div className=" bg-orange text-center rounded-full">
                <p className="relative -bottom-1 text-white uppercase  w-7 h-7">
                  {comment.author.name.substr(0, 2)}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">{comment.author.name}</p>
                <p className="break-all">{comment.content}</p>
                <p className="text-xs text-slate400">
                  {new Date(comment.createdAt).toLocaleDateString("in-ID")}
                </p>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
