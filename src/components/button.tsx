import styles from "./button.module.css"

import { PlusCircle } from "@phosphor-icons/react"

export function Button(){
   return(
      <button className={styles.createBttn}>
         Criar <PlusCircle size={18}/>
      </button>
   )
}