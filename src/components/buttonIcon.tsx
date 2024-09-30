import styles from "./buttonIcon.module.css"

import { Trash } from "@phosphor-icons/react"

export function ButtonIcon({...props}){
   return(
      <button className={styles.buttonIcon} {...props}>
         <Trash className={styles.icon}/>
      </button>
   )
}