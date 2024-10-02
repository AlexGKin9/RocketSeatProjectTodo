import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { Button } from './components/Button'
import { Header as TaskListHeader} from './components/Tasklist/Header'
import { Item } from './components/Tasklist/Item'
import { Empty } from './components/Tasklist/Empty'

export interface ITasks {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [formValue, setFormValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) =>{
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!formValue) {
      return
    }

    const newTask: ITasks = {
      id: new Date().getTime(),
      text: formValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setFormValue('')
  }

  function handleRemoveTask(id:number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    setTasks(filteredTasks)
  }

  function handleToggleTask({id, value}: { id: number; value: boolean}) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }

    })

    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Form
            onChange={(e) => setFormValue(e.target.value)}
            value={formValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <TaskListHeader 
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ?
          (
            <div>
              {tasks.map((task) =>(
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          )  :  (
            <Empty/>
          )
          }
        </div>
      </section>
    </main>
  )
}

export default App
