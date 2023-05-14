import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";

const ABOUTDES: FC = () => {
    return (
        <section className={styles.aboutdes}>
            <div className={styles.aboutdes_container}>
                <h2 className={styles.aboutdes_title}>Туристическая компания «Creative Travel Group»</h2>

                <div className={styles.aboutdes_info} >
                    <div className={styles.aboutdes_info_img_person}>

                    </div>

                    <div className={styles.aboutdes_info_benefits_con}>
                        <p className={styles.aboutdes_info_benefits}>Успешно работает на рынке туристических услуг с 2019 года, предоставляя клиентам широкий спектр услуг от выписки авиабилетов на любые направления до формирования сложных индивидуальных туров. На сегодняшний день с нами сотрудничает более 30-ти компаний по организации деловых и туристических поездок.В настоящее время мы предлагаем широкий спектр туристических услуг высокого качества, соответствующих малейшим требованиям наших клиентов. Мы составляем наши программы специально для вас, принимая во внимание любое ваше желание. Квалифицированные сотрудники нашей компании с вниманием отнесутся к Вам и организуют Ваш отдых.Для корпоративных клиентов мы предлагаем следующие услуги:</p>

                        <div className={styles.aboutdes_info_benefit_img} >

                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default ABOUTDES;