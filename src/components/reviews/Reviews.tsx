import style from './reviews.module.scss';
import dots from '../../assets/images/dots.svg';
import dotsWhite from '../../assets/images/dots_white.svg';
import leftArrow from '../../assets/images/homepage/slider_controls/left_arrow.svg';
import rightArrow from '../../assets/images/homepage/slider_controls/right_arrow.svg';
import { useEffect, useState } from 'react';
import generatorClient, { UserData, UsersResponse } from "random-users-generator";

const Reviews = () => {
    const [users, setUsers] = useState<UserData[]>();
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    useEffect(() => {
        generatorClient.getUsers({
            include: ['name', 'picture', 'location'],
            results: 5,
            info: false,
        }).then((data: UsersResponse) => {
            setUsers(data.results);
            setSelectedIndex(0);
        }).catch(err => console.error(err));

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

                <div className={style.review} key={selectedIndex}>
                    {
                        users?.length ?
                            <>
                                <div className={style.profile}>
                                    <img className={style.picture} alt='profile-img' src={users[selectedIndex].picture.large} />
                                    <div>
                                        <div className={style.name}>
                                            {`${users[selectedIndex].name.first} ${users[selectedIndex].name.last}`}
                                        </div>

                                        {users[selectedIndex].location.city}, {users[selectedIndex].location.country}
                                    </div>
                                </div>
                                <div className={style.thought}>
                                    “Our dedicated patient engagement app and
                                    web portal allow you to access information instantaneously (no tedeous form, long calls,
                                    or administrative hassle) and securely”
                                </div>
                            </>
                            :
                            <></>
                    }
                </div>
            </div >

            {
                users && <div className={style.controls}>
                    <img src={leftArrow} className={style.arrow} alt='left-arrow'
                        onClick={() => setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : users.length - 1)} />

                    {
                        users.map((_user, index) => {
                            return <div key={`control_${index}`}
                                className={`${style.control} ${selectedIndex === index ? style.active : ''}`}
                                onClick={() => setSelectedIndex(index)} />
                        })
                    }

                    <img src={rightArrow} className={style.arrow} alt='right-arrow'
                        onClick={() => setSelectedIndex(selectedIndex < users.length - 1 ? selectedIndex + 1 : 0)} />
                </div>
            }
        </section>
    </>
}

export default Reviews;