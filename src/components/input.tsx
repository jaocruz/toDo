import styles from "./input.module.css"

export function Input({...props}){
   return(
      <div className={styles.inputBackground}>
         <input {...props} placeholder="Adicione uma tarefa" type="text" />
      </div>
   )
}