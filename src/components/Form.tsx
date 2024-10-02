import styles from './Form.module.css'

export function Form(
    {
        ...rest
    }:  
    React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
) {
    return (
        <input
            className={styles.form}
            placeholder="Adicione uma nova tarefa"
            {...rest}
        />
    )
}