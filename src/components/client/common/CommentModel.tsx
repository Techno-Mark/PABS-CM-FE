import CloseIcon from "@/assets/Icons/admin/CloseIcon";
import SendIcon from "@/assets/Icons/client/forms/SendIcon";
import { formDrawerWidth1 } from "@/static/commonVariables";
import { AlphabetColor } from "@/utils/commonData";
import { useStyles } from "@/utils/useStyles";
import { Theme } from "@material-ui/core";
import {
  Avatar,
  Button,
  CssBaseline,
  Drawer,
  AppBar as MuiAppBar,
  styled,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const openedMixin = (theme: Theme) => ({
  width: formDrawerWidth1,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowY: "hidden",
  overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowY: "hidden",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const MyDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: any) => ({
  width: formDrawerWidth1,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),

  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function CommentModel({
  commentModelOpen,
  setCommentModelOpen,
}: any) {
  const [commentDataWorklogs, setCommentDataWorklogs] = useState([
    {
      UserName: "John Smith",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "07:15",
      Message: "Good morning everyone!",
    },
    {
      UserName: "Emily Clark",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "08:45",
      Message: "Just finished my report.",
    },
    {
      UserName: "Michael Johnson",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "09:00",
      Message: "Starting my tasks for the day.",
    },
    {
      UserName: "Jessica Lee",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "09:30",
      Message: "Does anyone need help with their projects?",
    },
    {
      UserName: "David Brown",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "10:00",
      Message: "Meeting at 11:00 AM.",
    },
    {
      UserName: "Samantha Green",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "10:30",
      Message: "Looking forward to the meeting.",
    },
    {
      UserName: "Chris White",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "11:15",
      Message: "Can someone review my code?",
    },
    {
      UserName: "Laura Martinez",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "12:00",
      Message: "Lunch break time.",
    },
    {
      UserName: "James Wilson",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "13:00",
      Message: "Back from lunch, let's continue.",
    },
    {
      UserName: "Chris White",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "11:15",
      Message: "Can someone review my code?",
    },
    {
      UserName: "Laura Martinez",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "12:00",
      Message: "Lunch break time.",
    },
    {
      UserName: "James Wilson",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "13:00",
      Message: "Back from lunch, let's continue.",
    },
    {
      UserName: "Chris White",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "11:15",
      Message: "Can someone review my code?",
    },
    {
      UserName: "Laura Martinez",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "12:00",
      Message: "Lunch break time.",
    },
    {
      UserName: "James Wilson",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "13:00",
      Message: "Back from lunch, let's continue.",
    },
    {
      UserName: "Chris White",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "11:15",
      Message: "Can someone review my code?",
    },
    {
      UserName: "Laura Martinez",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "12:00",
      Message: "Lunch break time.",
    },
    {
      UserName: "James Wilson",
      SubmitedDate: "08/05/2024",
      SubmitedTime: "13:00",
      Message: "Back from lunch, let's continue.",
    },
  ]);
  const classes = useStyles();
  const [closeDrawer, setCloseDrawer] = useState<Boolean>(false);
  const [comment, setComment] = useState("");

  const closeDrawerPanel = () => {
    setCloseDrawer(true);
    setTimeout(() => {
      setCloseDrawer(false);
      setCommentModelOpen(false);
    }, 100);
  };

  useEffect(() => {
    commentModelOpen === false && closeDrawerPanel();
  }, [commentModelOpen]);

  return (
    <>
      <CssBaseline />
      <MyDrawer
        anchor={"right"}
        classes={{ paper: classes.drawer }}
        className={`z-0 h-screen overflow-none ${
          closeDrawer ? "openDrawer" : ""
        }`}
        variant="permanent"
        open={commentModelOpen}
      >
        <div className="px-5 top-0 !h-[6%] flex items-center justify-between border-b">
          <span className="font-bold text-[18px]">Comments</span>
          <Tooltip title="Close" placement="bottom" arrow>
            <span
              className="flex items-center cursor-pointer"
              onClick={() => setCommentModelOpen(false)}
            >
              <CloseIcon />
            </span>
          </Tooltip>
        </div>
        <div className="pt-5 top-0 flex flex-col justify-start overflow-y-auto !h-[86%]">
          <div className="px-4 h-full hide-scrollbar">
            <div className="flex flex-col gap-4">
              {commentDataWorklogs.length > 0 ? (
                (localStorage.getItem("isClient")
                  ? commentDataWorklogs.slice(0, 1)
                  : commentDataWorklogs
                ).map((i: any, index: number) => (
                  <div className="flex gap-4" key={i.UserName + index}>
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
                    <div>
                      <div className="flex items-center justify-between max-w-[150px]">
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
                      <div className="flex items-center gap-2">
                        <div className="flex items-start justify-start gap-8 w-[70vw]">
                          <span className="hidden"></span>
                          <div className="max-w-[60vw]">{i.Message}</div>
                        </div>
                      </div>
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
        </div>
        <div className="px-5 top-0 !h-[9%] flex items-center justify-between border-t">
          <div className="border border-black w-full gap-3 py-1 rounded-lg my-2 text-black flex items-center justify-between">
            <input
              type="text"
              className="outline-none border-none ml-2 w-full text-lg"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <span
              className={`${
                comment.trim().length <= 0
                  ? "!cursor-not-allowed"
                  : "cursor-pointer"
              } mr-2`}
              onClick={(e) => {
                setComment("");
              }}
            >
              <SendIcon color={comment.trim().length <= 0 ? "gray" : "black"} />
            </span>
          </div>
        </div>
      </MyDrawer>
    </>
  );
}

export default CommentModel;
