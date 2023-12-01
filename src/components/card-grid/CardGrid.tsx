import styles from './card_grid.module.scss'
import { ReactElement } from 'react';
import left from '../../assets/images/card_grid/left.png';
import right from '../../assets/images/card_grid/right.png';

const CardGrid = (props: {
    title: string,
    description?: string,
    children: ReactElement[],
    button?: ReactElement,
    type?: 'left' | 'right',
}) => {
    return <>
        <section className={styles.cardGrid}>
            <img alt='banner-bg'
                className={`${styles.background} ${!props.type || props.type === 'left' ? styles.left : styles.right}`}
                src={!props.type || props.type === 'left' ? left : right} />

            <div className={styles.title}>{props.title}</div>

            <hr />

            <div className={styles.description}>{props.description}</div>

            <div className={styles.cards}>
                {props.children}
            </div>

            <div className={styles.button}>
                {props.button}
            </div>
        </section >
    </>
}

export default CardGrid;