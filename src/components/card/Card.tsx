import style from "./card.module.scss";
import { ReactElement } from "react";

const Card = (props: {
    image: string,
    title: string,
    description: string,
    imageFull?: boolean,
    button?: ReactElement,
}) => {
    return <>
        <div className={style.card}>
            <div className={`${style.image} ${props.imageFull ? style.full : ''}`}>
                <img alt={props.title} src={props.image} />
            </div>
            <div className={style.content}>
                <div className={style.title}>
                    {props.title}
                </div>
                {props.description}
                {props.button}
            </div>
        </div>
    </>
}

export default Card;