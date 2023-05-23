import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";

const BLOG: FC = () => {
    return (
        <section className={styles.blog}>
            <div className={styles.blog_con}>
                <h2 className={styles.blog_name}>Блог</h2>

                <div className={styles.blog_post_con}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        breakpoints={{
                            1200: {
                                slidesPerView: 4,
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
                        {[1, 2, 3, 4].map(() => {
                            return (
                                <SwiperSlide>
                                    <div className={styles.blog_post}>
                                        <div className={styles.blog_post_img_con}>
                                            <img src="" alt="" />
                                        </div>
                                        <h3 className={styles.blog_post_title}>
                                            News Title Lorem Ipsum Dolor Sit Amet
                                        </h3>
                                        <div className={styles.blog_post_date_con}>
                                            <p className={styles.blog_post_date}>12.04.23</p>
                                            <p className={styles.blog_post_date}>Creative Travel</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default BLOG;