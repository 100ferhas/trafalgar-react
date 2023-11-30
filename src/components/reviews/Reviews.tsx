import style from './reviews.module.scss';
import dots from '../../assets/images/dots.svg';
import dotsWhite from '../../assets/images/dots_white.svg';
import { useEffect, useState } from 'react';
import generatorClient, { UserData, UsersResponse } from "random-users-generator";

const Reviews = () => {
    const [users, setUsers] = useState<UserData[]>();

    useEffect(() => {
        generatorClient.getUsers({
            include: ['name', 'picture'],
            results: 5,
            seed: 'my-seed',
            info: false,
        })
            .then((data: UsersResponse) => setUsers(data.results))
            .catch(err => console.error(err));

    }, []);

    return <>
        <section className={style.reviews}>
            <img alt='dots' className={style.dots} src={dots} width={130} height={115} />

            <div className={style.container}>
                <img alt='dots' className={style.dots} src={dotsWhite} width={130} height={115} />

                <div className={style.title}>
                    What our customer are saying
                </div>

                <hr />

                <div className={style.slider}>

                </div>
            </div >
        </section>
    </>
}

export default Reviews;