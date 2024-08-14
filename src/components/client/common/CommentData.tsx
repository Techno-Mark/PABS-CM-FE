import { callAPIwithHeaders } from "@/api/commonFunction";
import SendIcon from "@/assets/Icons/client/forms/SendIcon";
import { showToast } from "@/components/ToastContainer";
import { getComment, saveComment } from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const CommentData = ({ clientID, isFormLocked }: any) => {
  const roleId = Cookies.get("roleId");
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
    await callAPIwithHeaders(getComment, "post", callback, {
      clientId: clientID,
    });
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
    <div
      className={`flex flex-col items-center justify-between w-full ${
        isFormLocked &&
        (roleId == "3" || roleId == "4") &&
        "pointer-events-none"
      }`}
    >
      <p className="font-bold text-lg">Comments</p>
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
