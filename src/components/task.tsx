import styles from "./task.module.css"

import { CheckBox } from "./checkbox"
import { ButtonIcon } from "./buttonIcon"

interface TaskProps{
   taskId:number
   isDone: boolean
   taskName: string
   onRemoveTask: (task: string) => void
   onToggleIsTaskCompleted: (taskId: number) => void
}

export function Task({ taskName, taskId, isDone, onRemoveTask, onToggleIsTaskCompleted }: TaskProps){

   function handleIsDone(){
      onToggleIsTaskCompleted(taskId)
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