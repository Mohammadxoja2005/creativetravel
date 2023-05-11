import React, { FC } from 'react'
import styles from "./index.module.scss";

const ABOUTUS: FC = () => {
    return (
        <section className={styles.aboutus}>
            <div className={styles.aboutus_container}>

                <div className={styles.aboutus_info}>
                    <h2 className={styles.aboutus_title}>О компании <span className={styles.aboutus_title_highlight}>Creative Travel Group</span></h2>
                    <p className={styles.aboutus_des}>Туристическая компания «Creative Travel Group » успешно работает на рынке туристических услуг с 2019 года, предоставляя клиентам широкий спектр услуг от выписки авиабилетов на любые направления до формирования сложных индивидуальных туров. На сегодняшний день с нами сотрудничает более 30-ти компаний по организации деловых и туристических поездок.В настоящее время мы предлагаем широкий спектр туристических услуг высокого качества, соответствующих малейшим требованиям наших клиентов. Мы составляем наши программы специально для вас, принимая во внимание любое ваше желание. Квалифицированные сотрудники нашей компании с вниманием отнесутся к Вам и организуют Ваш отдых.Для корпоративных клиентов мы предлагаем следующие услуги:</p>
                    <a className={styles.aboutus_nowmore}>Узнать подробнее</a>
                </div>

                <div className={styles.aboutus_img}>
                    
                </div>

            </div>
        </section>
    )
}

export default ABOUTUS;