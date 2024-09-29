import "./global.css"

import styles from "./app.module.css"

import toDoLogo from "./assets/rocket.svg"

import { Input } from "./components/input"
import { Button } from "./components/button"

export function App(){
  return(
    <div>
      <div className={styles.header}>
        <img className={styles.logo} src={toDoLogo} alt="" />
        <h1 className={styles.title}>to<span>Do</span></h1>
      </div>

      <div className={styles.addItem}>
        <Input/>
        <Button/>
      </div>
    </div>
  )
}