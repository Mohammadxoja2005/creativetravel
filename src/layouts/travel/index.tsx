import React, { FC } from 'react';
// styles
import styles from "./index.module.scss";

const TRAVEL: FC = () => {
    return (
        <section className={styles.travel}>
            <div className={styles.travel_container}>
                <h2 className={styles.travel_title}>Путешествие По  <span className={styles.travel_title_highlight}>Узбекистану</span></h2>

                <div className={styles.travel_cities_cont}>
                    {[1, 2, 3].map((index) => {
                        return (
                            <div key={index} className={styles.travel_city}>
                                <h4 className={styles.travel_city_name}>
                                    Бухара
                                </h4>
                            </div>
                        )
                    })

                    }
                </div>

            </div>
        </section>
    )
}

export default TRAVEL;