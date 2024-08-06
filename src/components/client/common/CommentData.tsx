import { callAPIwithHeaders } from "@/api/commonFunction";
import SendIcon from "@/assets/Icons/client/forms/SendIcon";
import { showToast } from "@/components/ToastContainer";
import { getComment, saveComment } from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import { AlphabetColor } from "@/utils/commonData";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";

const CommentData = ({ clientID }: { clientID: number }) => {
  const [comment, setComment] = useState("");
  const [commentDataWorklogs, setCommentDataWorklogs] = useState<
    | {
        id: number;
        comment: string;
        createdById: number;
        createdBy: string;
        date: string;
        time: string;
      }
    | []
  >([]);

  const getCommentData = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: {
        id: number;
        comment: string;
        createdById: number;
        createdBy: string;
        date: string;
        time: string;
      }
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setComment(!!ResponseData ? ResponseData.comment : "");
          setCommentDataWorklogs(!!ResponseData ? ResponseData : []);
          return;
      }
    };
    await callAPIwithHeaders(getComment, "get", callback, {});
  };

  useEffect(() => {
    getCommentData();
  }, []);

  const handleSaveComment = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: {
        id: number;
        comment: string;
        createdById: number;
        createdBy: string;
        date: string;
        time: string;
      }
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setComment(!!ResponseData ? ResponseData.comment : "");
          showToast(Message, ToastType.Success);
          return;
      }
    };
    await callAPIwithHeaders(saveComment, "post", callback, {
      comment: comment,
      clientId: clientID,
    });
  };

  return (
    <div className="flex flex-col items-center justify-between w-full">
      <p className="font-bold text-lg">Comments</p>
      {/* <div className="pt-2 top-0 flex flex-col justify-start overflow-y-auto !h-full w-full">
        <div className="px-4 h-full hide-scrollbar w-full">
          <div className="flex flex-col gap-4 w-full">
            {commentDataWorklogs.length > 0 ? (
              (localStorage.getItem("isClient")
                ? commentDataWorklogs.slice(0, 1)
                : commentDataWorklogs
              ).map((i: any, index: number) => (
                <div className="flex gap-4 w-full" key={i.UserName + index}>
                  {i.UserName.length > 0 ? (
                    <Avatar>
                      <AlphabetColor
                        alphabet={i.UserName.split(" ")
                          .slice(0, 2)
                          .map((word: string) => word.charAt(0).toUpperCase())
                          .join("")}
                      />
                    </Avatar>
                  ) : (
                    <Avatar sx={{ width: 32, height: 32 }} />
                  )}
                  <div className="flex flex-col items-start justify-center w-full">
                    <div className="flex items-center justify-between w-full">
                      <span>{i.UserName}&nbsp;&nbsp;</span>
                      <span>
                        {i.SubmitedDate},&nbsp;
                        {new Date(
                          `1970-01-01T${i.SubmitedTime}:00Z`
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <div className="text-start">{i.Message}</div>
                  </div>
                </div>
              ))
            ) : (
              <span className="flex items-center justify-center">
                No record found.
              </span>
            )}
          </div>
        </div>
      </div> */}
      <div className="border border-black w-full gap-3 py-1 rounded-lg my-2 text-black flex items-center justify-between mt-5">
        <textarea
          className="outline-none border-none ml-2 px-2 py-1 w-full text-lg resize-none"
          placeholder="Add a Comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
        />
        <span
          className={`${
            comment.trim().length <= 0
              ? "!cursor-not-allowed"
              : "cursor-pointer"
          } mr-5`}
          onClick={() =>
            comment.trim().length <= 0 ? undefined : handleSaveComment()
          }
        >
          <SendIcon color={comment.trim().length <= 0 ? "gray" : "black"} />
        </span>
      </div>
    </div>
  );
};

export default CommentData;
