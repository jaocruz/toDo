import styles from "./button.module.css"

import { PlusCircle } from "@phosphor-icons/react"

export function Button({...props}){
   return(
      <button {...props} className={styles.createBttn}>
         Criar <PlusCircle size={18}/>
      </button>
   )
}