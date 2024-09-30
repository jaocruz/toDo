import styles from "./task.module.css"

import { CheckBox } from "./checkbox"
import { ButtonIcon } from "./buttonIcon"

import { useState } from "react"

interface TaskProps{
   taskName: string
   onRemoveTask: (task: string) => void
}

export function Task({ taskName, onRemoveTask }: TaskProps){
   const [isDone, setIsDone] = useState(false)

   function handleIsDone(){
      setIsDone(!isDone)
   }

   function handleRemoveTask(){
      onRemoveTask(taskName)
   }

   return(
      <div className={styles.container}>
         <CheckBox isDone={isDone} handleIsDone={handleIsDone}/>

         <p className={isDone ? styles.checked : styles.normal}>
            {taskName}
         </p>

         <ButtonIcon onClick={handleRemoveTask}/>
      </div>
   )
}