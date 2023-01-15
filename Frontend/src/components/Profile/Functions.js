import { useContext } from "react";
import { ErrorContext } from "./SignUp";

export function Input({ label, type, value, onchangeFunc, errorFunc }) {
  const { error, setError } = useContext(ErrorContext);

  return (
    <label>
      {label}
      {': '}
      <input
        type={type}
        required
        value={value}
        onChange={(e) => {
          onchangeFunc(e.target.value);
          setError(errorFunc(e.target.value, label, error));
        }}
      ></input>
    </label>
  );
}

export function checkEmpty(value, label, errorArr) {
  const errmsg = label + ' too short';
  if (value.length <= 0) {
    if (errorArr.filter((el) => el === errmsg).length === 0) {
      return [...errorArr, errmsg];
    }
  } else {
    return errorArr.filter((el) => el !== errmsg);
  }
  return errorArr;
}

export function checkEmail(value, label, errorArr) {
  const errmsg = 'Email incorrect';
  const check = value.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (check === null) {
    if (errorArr.filter((el) => el === errmsg).length === 0) {
      return [...errorArr, errmsg];
    }
  } else {
    return errorArr.filter((el) => el !== errmsg);
  }
  return errorArr;
}