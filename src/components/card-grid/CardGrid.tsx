import styles from './card_grid.module.scss'
import { ReactElement } from 'react';

const Background = (props: { background?: string }) => {
    return props.background ?
        <img alt='banner-bg' className={styles.background} src={props.background} />
        :
        <></>
}

const CardGrid = (props: {
    background?: string,
    title: string,
    description: string,
    children: ReactElement[],
    button?: ReactElement
}) => {
    return <>
        <div className={styles.cardGrid}>
            <Background background={props.background} />

            <div className={styles.title}>{props.title}</div>

            <hr />

            <div className={styles.description}>{props.description}</div>

            <div className={styles.cards}>
                {props.children}
            </div>

            <div className={styles.button}>
                {props.button}
            </div>
        </div >
    </>
}

export default CardGrid;