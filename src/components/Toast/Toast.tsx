import s from "./Toast.module.css";
import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";

interface Toast {
  type: "success" | "error";
  text: string;
  duration: number;
  closing: boolean;
}

export default function Toast({
  type,
  text,
  duration,
  closing = false,
}: Toast) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 10);
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div
      className={`${s.box} ${visible ? s.show : s.hide} ${
        type === "success" ? s.success : s.error
      }`}
    >
      <div className={s.message}>{text}</div>
      {closing && <IoIosClose className={s.close} onClick={handleClose} />}
    </div>
  );
}
