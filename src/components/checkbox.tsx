import styles from "./checkbox.module.css"

import { CheckCircle, Circle } from "@phosphor-icons/react"

export interface CheckBoxProps{
   isDone: boolean
   handleIsDone: () => void
}

export function CheckBox({ isDone,handleIsDone }: CheckBoxProps){
   return(
      <div className={styles.checkbox}>
         {isDone ? (
            <div className={styles.checked} onClick={handleIsDone}>
               <CheckCircle weight="fill" className={styles.checkedIcon}/>
               <div className={styles.checkedBackground}></div>
            </div>
         ) : (
            <div className={styles.empty} onClick={handleIsDone}>
               <Circle className={styles.emptyIcon}/>
               <div className={styles.teste}></div>
            </div>
         )}
      </div>
   )
}