import "./global.css"

import styles from "./app.module.css"

import toDoLogo from "./assets/rocket.svg"

import { Task } from "./components/task"
import { Input } from "./components/input"
import { Button } from "./components/button"

import { ClipboardText } from "@phosphor-icons/react"

import { useState } from "react"

const tasksToDo = [
  {
    id: 1,
    isDone: true,
    name: "criar uma nova task"
  },

  {
    id: 2,
    isDone: true,
    name: "fazer commit da ultima funcionalidade desenvolvida"
  },

  {
    id: 3,
    isDone: false,
    name: "enviar repositório para o github e posteriormente para a Rocketseat"
  }
]

export function App(){
  const [tasks, setTasks] = useState(tasksToDo)

  const [newTask, setNewTask] = useState("")

  const completedTasks = tasks.filter(task => task.isDone).length

  function addNewTask(){
    const newTaskInfo = {
      id: tasks.length + 1,
      isDone: false,
      name: newTask
    }

    setTasks([...tasks, newTaskInfo])
    setNewTask("")
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value)
  }

  function removeTask(taskToDelete: string){
    const tasksWithoutDeleteOne = tasks.filter(task => task.name !== taskToDelete)
    setTasks(tasksWithoutDeleteOne)
  }

  function toggleIsTaskCompleted(taskId: number){
    const updatedTasks = tasks.map(task => {
      if(task.id === taskId){
        return {...task, isDone: !task.isDone}
      }

      return task
    })

    setTasks(updatedTasks)
    console.log(setTasks)
  }

  return(
    <div>
      <div className={styles.header}>
        <img className={styles.logo} src={toDoLogo} alt="" />
        <h1 className={styles.title}>to<span>Do</span></h1>
      </div>

      <div className={styles.page}>
        <div className={styles.newTask}>
          <Input onChange={handleNewTaskChange} value={newTask}/>
          <Button onClick={addNewTask}/>
        </div>

        <div className={styles.tasks}>
          <div className={styles.info}>
            <div className={styles.created}>
              Tarefas criadas
              <div className={styles.counter}>{tasks.length}</div>
            </div>

            <div className={styles.done}>
              Concluídas
              <div className={styles.counter}>{completedTasks} de {tasks.length}</div>
            </div>
          </div>

          {tasks.length === 0 ? (
            <div className={styles.empty}>
              <ClipboardText size={56}/>
              
              <div className={styles.text}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          ) : (
            <div className={styles.tasksList}>
              {tasks.map(task => {
                return(
                  <Task
                  key={task.id}
                  taskId={task.id}
                  isDone={task.isDone}
                  taskName={task.name}
                  onRemoveTask={removeTask}
                  onToggleIsTaskCompleted={toggleIsTaskCompleted}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}