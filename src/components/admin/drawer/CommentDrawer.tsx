import { callAPIwithHeaders } from "@/api/commonFunction";
import CloseIcon from "@/assets/Icons/admin/CloseIcon";
import SendIcon from "@/assets/Icons/client/forms/SendIcon";
import { showToast } from "@/components/ToastContainer";
import { getComment, saveComment } from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import { AlphabetColor } from "@/utils/commonData";
import { Avatar, Tooltip } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

type Comment = {
  id: number;
  comment: string;
  createdById: number;
  createdBy: string;
  createdDate: string;
};

const CommentDrawer = ({ isOpen, setIsOpen, clientId }: any) => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState<Comment[]>([]);
  const handleClose = () => setIsOpen(false);

  const formatDateTime = (dateTime: string) => {
    return dateTime ? dayjs(dateTime).format("MM/DD/YYYY HH:mm:ss") : "N/A";
  };

  const getCommentList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: Comment[]
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setCommentsList(ResponseData || []);

          return;
      }
    };
    await callAPIwithHeaders(getComment, "post", callback, {
      clientId: clientId,
    });
  };

  const handleSaveComment = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: Comment
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setComment("");
          getCommentList();
          return;
      }
    };
    await callAPIwithHeaders(saveComment, "post", callback, {
      comment: comment,
      clientId: clientId,
    });
  };

  useEffect(() => {
    getCommentList();
  }, []);

  return (
    <div
      className={`fixed right-0 top-0 z-30 w-[420px] h-full transform border-l border-lightSilver bg-white text-black ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out flex flex-col`}
    >
      <div className="p-5 flex items-center justify-between border-b border-[#d4d2d2]">
        <span className="font-bold text-xl">Comments</span>
        <Tooltip title="Close" placement="bottom" arrow>
          <span
            className="flex items-center cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon />
          </span>
        </Tooltip>
      </div>
      <div className="flex-grow overflow-y-auto px-4">
        {commentsList.length > 0 ? (
          commentsList.map((comment) => (
            <div key={comment.id} className="py-4 last:mb-0 border-b border-[#d4d2d2]">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  {comment.createdBy.length > 0 ? (
                    <Avatar className="bg-blue-500">
                      <AlphabetColor
                        alphabet={comment.createdBy
                          .split(" ")
                          .slice(0, 2)
                          .map((word: string) => word.charAt(0).toUpperCase())
                          .join("")}
                      />
                    </Avatar>
                  ) : (
                    <Avatar sx={{ width: 50, height: 50 }} />
                  )}
                  <span className="font-semibold text-md ml-3">
                    {comment.createdBy}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {formatDateTime(comment.createdDate)}
                </span>
              </div>
              <p className="text-gray-700 ml-[37px] text-sm">
                {comment.comment}
              </p>
            </div>
          ))
        ) : (
          <span className="flex items-center justify-center h-full">
            No comment found.
          </span>
        )}
      </div>
      <div className="p-5 border-t">
        <div className="border border-gray-300 rounded-lg flex items-center">
          <textarea
            className="flex-grow p-3 text-base resize-none outline-none"
            placeholder="Add a Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={2}
          />
          <span
            className={`p-2 ${
              comment.trim().length > 0
                ? "cursor-pointer"
                : "cursor-not-allowed"
            }`}
            onClick={() =>
              comment.trim().length > 0 ? handleSaveComment() : undefined
            }
          >
            <SendIcon color={comment.trim().length > 0 ? "black" : "gray"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentDrawer;
