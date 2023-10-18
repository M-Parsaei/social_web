import React from 'react'
import styles from './accountDropMenu.module.css'
import { useSignOut } from '../hooks/useSignOut'
export default function AccountDropMenu() {
   const signOut = useSignOut()
  return (
    <div className={styles['drop-down-container']} onClick={(e)=>{e.preventDefault();signOut()}}>Log Out</div>
  )
}
