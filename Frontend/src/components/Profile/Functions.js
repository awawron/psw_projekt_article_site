import { useContext } from "react";

// These are some helper functions and components for signin/signup and profile page

// This function checks whether there is anything in the given input and updates the error array accordingly
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

// This function checks whether the email is valid (within reason) and updates the error array accordingly
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