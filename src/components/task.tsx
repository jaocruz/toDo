import styles from "./task.module.css"

import { ButtonIcon } from "./buttonIcon"
import { CheckBox, CheckBoxProps } from "./checkbox"
import { useState } from "react"

export function Task({  }){
   const [isDone, setIsDone] = useState(false)

   function handleIsDone(){
      setIsDone(!isDone)
   }

   return(
      <div className={styles.container}>
         <CheckBox isDone={isDone} handleIsDone={handleIsDone}/>

         <p className={isDone ? styles.checked : styles.normal}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

         <ButtonIcon/>
      </div>
   )
}