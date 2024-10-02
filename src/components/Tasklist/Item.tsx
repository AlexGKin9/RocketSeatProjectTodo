import styles from './Item.module.css'

import { Trash } from 'phosphor-react'

import { ITasks } from '../../App'

interface Props {
    data: ITasks
    removeTask: (id: number) => void
    toggleTaskStatus: ({id, value}: {id: number; value: boolean}) => void
}

export function Item({ data, removeTask, toggleTaskStatus}: Props){

    function handleRemove(){
        removeTask(data.id)
    }

    function handleTaskToggle(){
        toggleTaskStatus({id: data.id, value: !data.isChecked})
    }

    const paragraphCheckedClassname = data.isChecked
        ? styles['paragraph-checked']
        : ''

    return(
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={data.isChecked} />
                    <span>
                     {data.isChecked}
                    </span>

                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {data.text}
                    </p>
                </label>
            </div>

            <button onClick={handleRemove}>
                <Trash size={16} color="#808080"/>
            </button>            
        </div>
    )
}