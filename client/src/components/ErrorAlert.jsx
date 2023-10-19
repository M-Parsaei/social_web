import React from 'react'
import styles from "./errorAlert.module.css";
import {BiSolidErrorCircle} from "react-icons/bi";
import { motion } from 'framer-motion';
import { errorVariant } from '../animations/Variants';

export default function ErrorAlert({error}) {
  return (
    <motion.div 
    variants={errorVariant}
    className={styles["error-container"]}>
        <BiSolidErrorCircle/>
        <span>{`Sorry: ${error}`}</span>
    </motion.div>
  )
}
