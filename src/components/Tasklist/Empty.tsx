import styles from './Empty.module.css'

export function Empty() {
    return (
        <div className={styles.container}>
            <img src="/clipboard.png" />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seu itens a fazer
            </p>
        </div>
    )
}