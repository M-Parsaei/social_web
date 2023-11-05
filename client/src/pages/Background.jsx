import React, { Children } from "react";
import styles from "./background.module.css";
import { useDarkModeContext } from "../hooks/useDarkModeContext";

export default function Background({ children }) {
  const{state} = useDarkModeContext();
  return (
    <div className={state? styles["dark-background"] : styles["bright-background"]}>
      {children}
    </div>
  );
}
