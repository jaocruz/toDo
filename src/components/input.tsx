import styles from "./input.module.css"

export function Input(){
   return(
      <div className={styles.inputBackground}>
         <input placeholder="Adicione uma tarefa" type="text" />
      </div>
   )
}