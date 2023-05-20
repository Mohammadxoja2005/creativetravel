import React, { FC } from 'react';
// styles
import styles from "./index.module.scss";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";

const TRAVEL: FC = () => {
    return (
        <section className={styles.travel}>
            <div className={styles.travel_container}>
                <h2 className={styles.travel_title}>Путешествие По  <span className={styles.travel_title_highlight}>Узбекистану</span></h2>

                <div className={styles.travel_cities_cont}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={18}
                        breakpoints={{
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 18
                            },

                            992: {
                                slidesPerView: 3,
                                spaceBetween: 13
                            },

                            768: {
                                slidesPerView: 3,
                                spaceBetween: 13
                            },

                            576: {
                                slidesPerView: 2.2,
                                spaceBetween: 13
                            },

                            0: {
                                slidesPerView: 1.2,
                                spaceBetween: 13
                            }
                        }}
                    >
                        {[1, 2, 3].map((index) => {
                            return (
                                <SwiperSlide>
                                    <div key={index} className={styles.travel_city}>
                                        <h4 className={styles.travel_city_name}>
                                            Бухара
                                        </h4>
                                    </div>
                                </SwiperSlide>
                            )
                        })

                        }
                    </Swiper>
                </div>

            </div>
        </section>
    )
}

export default TRAVEL;