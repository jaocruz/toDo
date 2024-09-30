import "./global.css"

import styles from "./app.module.css"

import toDoLogo from "./assets/rocket.svg"

import { Input } from "./components/input"
import { Button } from "./components/button"

import { ClipboardText } from "@phosphor-icons/react"

export function App(){
  return(
    <div>
      <div className={styles.header}>
        <img className={styles.logo} src={toDoLogo} alt="" />
        <h1 className={styles.title}>to<span>Do</span></h1>
      </div>

      <div className={styles.page}>
        <div className={styles.newTask}>
          <Input/>
          <Button/>
        </div>

        <div className={styles.tasks}>
          <div className={styles.info}>
            <div className={styles.created}>
              Tarefas criadas
              <div className={styles.counter}>0</div>
            </div>

            <div className={styles.done}>
              Concluídas
              <div className={styles.counter}>0</div>
            </div>
          </div>

          <div className={styles.empty}>
            <ClipboardText size={56}/>
            
            <div className={styles.text}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}