import React from "react";

type ToastNotificationTypes = {
  type: "success" | "error";
  text: string;
};

const ToastNotification = ({ type, text }: ToastNotificationTypes) => {
  return (
    <div
      className={`fixed z-50 bottom-5 left-7 px-6 py-[10px] rounded-md text-gray-100 text-sm ${
        type === "success" ? "bg-[#318057]" : "bg-zaama_red/60"
      } `}
    >
      {text}
    </div>
  );
};

export default ToastNotification;
