import styles from "./buttonIcon.module.css"

import { Trash } from "@phosphor-icons/react"

export function ButtonIcon(){
   return(
      <button className={styles.buttonIcon}>
         <Trash className={styles.icon}/>
      </button>
   )
}