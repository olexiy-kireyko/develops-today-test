import { FaEyeSlash, FaEye } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import s from "./Input.module.css";

interface InputProps {
  type: "password" | "text" | "number";
  clearable: boolean;
  passwordVisibility: boolean;
}

export default function Input({
  type,
  clearable,
  passwordVisibility,
}: InputProps) {
  const [isShowPassword, setIsShowPassword] = useState(passwordVisibility);
  const [inputValue, setInputValue] = useState("");

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleClearText = () => {
    setInputValue("");
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={s.box}>
      <input
        className={s.field}
        type={isShowPassword ? "text" : type}
        value={inputValue}
        placeholder={`enter your ${type}`}
        onChange={handleChangeInput}
      />

      {type === "password" &&
        (!isShowPassword ? (
          <FaEyeSlash className={s.eye} onClick={handleShowPassword} />
        ) : (
          <FaEye className={s.eye} onClick={handleShowPassword} />
        ))}

      {clearable && (
        <IoIosClose className={s.clear} onClick={handleClearText} />
      )}
    </div>
  );
}
