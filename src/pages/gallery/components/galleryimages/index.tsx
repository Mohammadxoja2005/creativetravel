import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";

const GALLERYIMAGES: FC = () => {
    return (
        <section className={styles.gal}>
            <div className={styles.gal_container}>
                <h1 className={styles.gal_title}>
                    Галерея
                </h1>

                <div className={styles.gal_img_con}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((index) => {
                        return (
                            <div key={index} className={styles.gal_img}>{index}</div>
                        )
                    })

                    }
                </div>
            </div>
        </section>
    )
}

export default GALLERYIMAGES;