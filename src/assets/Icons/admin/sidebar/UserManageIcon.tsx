import React from "react";

function UserManageIcon(props: { fill: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 16H10V15.55C10 15.2667 9.92083 15.0042 9.7625 14.7625C9.60417 14.5208 9.38333 14.3333 9.1 14.2C8.76667 14.05 8.42917 13.9375 8.0875 13.8625C7.74583 13.7875 7.38333 13.75 7 13.75C6.61667 13.75 6.25417 13.7875 5.9125 13.8625C5.57083 13.9375 5.23333 14.05 4.9 14.2C4.61667 14.3333 4.39583 14.5208 4.2375 14.7625C4.07917 15.0042 4 15.2667 4 15.55V16ZM12.75 14.5H15.25C15.4667 14.5 15.6458 14.4292 15.7875 14.2875C15.9292 14.1458 16 13.9667 16 13.75C16 13.5333 15.9292 13.3542 15.7875 13.2125C15.6458 13.0708 15.4667 13 15.25 13H12.75C12.5333 13 12.3542 13.0708 12.2125 13.2125C12.0708 13.3542 12 13.5333 12 13.75C12 13.9667 12.0708 14.1458 12.2125 14.2875C12.3542 14.4292 12.5333 14.5 12.75 14.5ZM7 13C7.41667 13 7.77083 12.8542 8.0625 12.5625C8.35417 12.2708 8.5 11.9167 8.5 11.5C8.5 11.0833 8.35417 10.7292 8.0625 10.4375C7.77083 10.1458 7.41667 10 7 10C6.58333 10 6.22917 10.1458 5.9375 10.4375C5.64583 10.7292 5.5 11.0833 5.5 11.5C5.5 11.9167 5.64583 12.2708 5.9375 12.5625C6.22917 12.8542 6.58333 13 7 13ZM12.75 11.5H15.25C15.4667 11.5 15.6458 11.4292 15.7875 11.2875C15.9292 11.1458 16 10.9667 16 10.75C16 10.5333 15.9292 10.3542 15.7875 10.2125C15.6458 10.0708 15.4667 10 15.25 10H12.75C12.5333 10 12.3542 10.0708 12.2125 10.2125C12.0708 10.3542 12 10.5333 12 10.75C12 10.9667 12.0708 11.1458 12.2125 11.2875C12.3542 11.4292 12.5333 11.5 12.75 11.5ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V7C0 6.45 0.195833 5.97917 0.5875 5.5875C0.979167 5.19583 1.45 5 2 5H7V2C7 1.45 7.19583 0.979167 7.5875 0.5875C7.97917 0.195833 8.45 0 9 0H11C11.55 0 12.0208 0.195833 12.4125 0.5875C12.8042 0.979167 13 1.45 13 2V5H18C18.55 5 19.0208 5.19583 19.4125 5.5875C19.8042 5.97917 20 6.45 20 7V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H2ZM2 18H18V7H13C13 7.55 12.8042 8.02083 12.4125 8.4125C12.0208 8.80417 11.55 9 11 9H9C8.45 9 7.97917 8.80417 7.5875 8.4125C7.19583 8.02083 7 7.55 7 7H2V18ZM9 7H11V2H9V7Z"
        fill={props.fill}
      />
    </svg>
  );
}

export default UserManageIcon;
