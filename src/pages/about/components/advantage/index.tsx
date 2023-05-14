import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// data
import { benefitTravelSecond } from '../../../../data/data';

const ADVANTAGE: FC = () => {
    return (
        <div className={styles.ad}>
            <div className={styles.ad_container} >
                <div className={styles.ad_first_benefit}>
                    <div className={styles.ad_first_title_con}>
                        <h2 className={styles.ad_first_title}>Преимущества</h2>
                    </div>

                    <div className={styles.ad_first_list}>
                        <div className={styles.ad_bullet_container}>
                            <div className={styles.ad_bullet}></div>
                            <li className={styles.ad_first_list_name}>
                                Деловые поездки, индивидуальные и групповые туры по Узбекистану и за рубеж
                            </li>
                        </div>
                        <div className={styles.ad_bullet_container}>
                            <div className={styles.ad_bullet}></div>
                            <li className={styles.ad_first_list_name}>
                                Организация корпоративных мероприятий в Узбекистане и за ее пределами
                            </li>
                        </div>
                        <div className={styles.ad_bullet_container}>
                            <div className={styles.ad_bullet}></div>
                            <li className={styles.ad_first_list_name}>
                                Бронирование номеров в гостиницах и отелях Узбекистана и зарубежом
                            </li>
                        </div>

                        <div className={styles.ad_bullet_container}>
                            <div className={styles.ad_bullet}></div>
                            <li className={styles.ad_first_list_name}>
                                Бронирование и продажа электронных авиабилетов по всем направлениям в собственной авиакассе
                            </li>
                        </div>

                        <div className={styles.ad_bullet_container}>
                            <div className={styles.ad_bullet}></div>
                            <li className={styles.ad_first_list_name}>
                                Бизнес-авиация. Чартерные авиарейсы любых иностранных и Национальных авиакомпаний
                            </li>
                        </div>

                        <div className={styles.ad_bullet_container}>
                            <div className={styles.ad_bullet}></div>
                            <li className={styles.ad_first_list_name}> Транспортные маршруты любой сложности</li>
                        </div>

                        <div className={styles.ad_bullet_container}>
                            <div className={styles.ad_bullet}></div>
                            <li className={styles.ad_first_list_name}>
                                Аренда автомобилей и трансферы
                            </li>
                        </div>

                        <div className={styles.ad_bullet_container}>
                            <div className={styles.ad_bullet}></div>
                            <li className={styles.ad_first_list_name}>
                                Экскурсионное обслуживание
                            </li>
                        </div>

                        <div className={styles.ad_bullet_container}>
                            <div className={styles.ad_bullet}></div>
                            <li className={styles.ad_first_list_name}>
                                Помощь в оформление документов для получения виз
                            </li>
                        </div>

                        <div className={styles.ad_bullet_container}>
                            <div className={styles.ad_bullet}></div>
                            <li className={styles.ad_first_list_name}>
                                Для руководителей предприятий предлагаем возможность стимулировать своих сотрудников подарками в виде туристического сертификата.
                            </li>
                        </div>
                    </div>
                </div>

                <div className={styles.ad_second_benefit}>
                    <div className={styles.ad_second_title_con}>
                        <h2 className={styles.ad_second_title}>Преимущества</h2>
                        <p className={styles.ad_second_des}>Более подробную информацию вы можете получить у менеджеров .</p>
                    </div>

                    <div className={styles.ad_second_list} >
                        {benefitTravelSecond.map((benefit) => {
                            return (
                                <div key={benefit.id} className={styles.ad_second_list_name}>
                                    <div className={styles.ad_second_list_numeration} >{benefit.id}.</div>
                                    {benefit.content}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ADVANTAGE;