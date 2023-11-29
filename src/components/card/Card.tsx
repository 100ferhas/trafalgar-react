import { idText } from "typescript";
import style from "./card.module.scss";
import { ReactElement } from "react";

const Card = (props: {
    image: string,
    title: string,
    description: string,
    button?: ReactElement,
}) => {
    return <>
        <div className={style.card}>
            <div className={style.image}>
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