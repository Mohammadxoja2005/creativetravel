import React, { FC } from 'react';
// styles
import styles from "./index.module.scss";
// data
import { tourContent } from '../../../../data/data';

const EXCURSION: FC = () => {
    return (
        <section className={styles.exc}>
            <div className={styles.exc_container} >
                <div className={styles.exc_img}>

                </div>
                <div className={styles.exc_info_con} >
                    <div className={styles.exc_name_con}>
                        <h1 className={styles.exc_name}>
                            Бухара
                        </h1>
                        <p className={styles.exc_name_des}>
                            Бухара - древний город в центральноазиатской стране Узбекистана. Это была известная остановка на торговом пути Шелкового пути между Востоком и Западом и крупный средневековый центр исламского богословия и культуры. В нем до сих пор находятся сотни хорошо сохранившихся мечетей, медресе, базаров и караван-сараев, построенных в основном с 9 по 17 века.
                        </p>
                    </div>

                    <div className={styles.exc_des_con}>
                        <h2 className={styles.exc_des_title}>Достопримечательности Бухары</h2>

                        <div className={styles.exc_des}>
                            {tourContent.map((tour) => {
                                return (
                                    <p key={tour.id} className={styles.exc_des_content}>{tour.content}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default EXCURSION