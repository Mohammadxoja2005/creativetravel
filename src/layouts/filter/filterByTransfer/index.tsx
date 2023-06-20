import React, { FC, useState } from 'react'
// styles
import styles from "./index.module.scss";
// headless ui
import { Menu, Transition, Listbox, RadioGroup } from '@headlessui/react';
// icons
import DOWN from "../../../assets/icons/down.png";
import PLUS from "../../../assets/icons/plus.png";
import MINUS from "../../../assets/icons/minus.png";
// data
import { routesArr } from '../../../data/data';

const FILTERBYTRANSFER: FC = () => {

    const [openCalendar, setOpenCalendar] = useState<boolean>(false);

    return (
        <>
            <div className={styles.filter_items}>
                <div className={styles.filter_items_basic_information}>
                    <h3 className={styles.filter_items_basic_title}>Основные сведения</h3>

                    <div className={styles.filter_items_dates_locations}>
                        <div className={styles.filter_items_input_container}>
                            <h4 className={styles.filter_items_input_title} >Город отбытия</h4>
                            <input type="text" value={'Ташкент, Узбекистан'} className={styles.filter_items_input} />
                        </div>


                        <div className={styles.filter_items_input_container}>
                            <h4 className={styles.filter_items_input_title} >Город прибытия</h4>
                            <input type="text" value={'Ташкент, Узбекистан'} className={styles.filter_items_input} />
                        </div>
                    </div>
                </div>

                <div className={styles.filter_items_add_information}>
                    <div className={styles.filter_items_time}>

                        <div className={styles.filter_items_input_container}>
                            <h4 className={styles.filter_items_input_title} >Когда</h4>
                            <Listbox>
                                <Listbox.Button onClick={() => setOpenCalendar(true)} className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{'Сб, 8 апреля 2023 г.'}</p>
                                </Listbox.Button>
                                {/* {openCalendar
                        ?
                        <div className={styles.filter_calendar_container}>
                            <Calendar onChange={(e: any) => chooseCalendarValue(e)} value={calendarValue} />
                        </div>
                        : null} */}
                            </Listbox>
                        </div>

                        <div className={styles.filter_items_input_container}>
                            <h4 className={styles.filter_items_input_title} >Время подачи</h4>
                            <Listbox>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{'10:00'}</p>
                                </Listbox.Button>
                                {/* <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                    <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                    <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                </Listbox.Options> */}
                            </Listbox>
                        </div>


                        <div className={styles.filter_items_input_container}>
                            <h4 className={styles.filter_items_input_title}>Кол-во пассажиров</h4>
                            <div className={styles.filter_items_list_show}>
                                <img className={styles.filter_items_sign} src={MINUS} alt="minus" />
                                <input type="text" className={styles.filter_items_input_age} value={"15"} />
                                <img className={styles.filter_items_sign} src={PLUS} alt="plus" />
                            </div>
                        </div>

                        <div className={styles.filter_items_input_container}>
                            <h4 className={styles.filter_items_input_title} >Кол-во багажа</h4>
                            <div className={styles.filter_items_list_show}>
                                <img className={styles.filter_items_sign} src={MINUS} alt="minus" />
                                <input type="text" className={styles.filter_items_input_age} value={"15"} />
                                <img className={styles.filter_items_sign} src={PLUS} alt="plus" />
                            </div>
                        </div>

                        <div className={styles.filter_items_add_checkbox_con}>
                            <input type="checkbox" className={styles.filter_items_add_checkbox} />
                            <p className={styles.filter_items_add_text}>Детское кресло</p>
                        </div>

                        <div className={styles.filter_items_add_checkbox_con}>
                            <input type="checkbox" className={styles.filter_items_add_checkbox} />
                            <p className={styles.filter_items_add_text}>Остановка по пути</p>
                        </div>
                    </div>
                </div>
                <div className={styles.filter_input_btn}>
                    Найти
                </div>
            </div>
        </>
    )
}

export default FILTERBYTRANSFER;