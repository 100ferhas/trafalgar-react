import styles from './button.module.scss';

const Button = (props: {
    text: string,
    type?: 'primary',
}) => {
    return <>
        <a href='#!' className={`${styles.button} ${props.type ? styles[props.type] : ''}`}>
            {props.text}
        </a >
    </>
}

export default Button;