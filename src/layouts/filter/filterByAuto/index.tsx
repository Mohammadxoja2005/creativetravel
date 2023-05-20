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

const FILTERBYAUTO: FC = () => {
    const [openCalendar, setOpenCalendar] = useState<boolean>(false);

    return (
        <div className={styles.filter_items}>
            <div className={styles.filter_items_basic_information}>
                <h3 className={styles.filter_items_basic_title}>Основные сведения</h3>

                <div className={styles.filter_items_dates_locations}>
                    <div className={styles.filter_items_input_container}>
                        <h4 className={styles.filter_items_input_title} >Место получения</h4>
                        <input type="text" value={'Ташкент, Узбекистан'} className={styles.filter_items_input} />
                    </div>


                    <div className={styles.filter_items_input_container}>
                        <h4 className={styles.filter_items_input_title} >Дата получения</h4>
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
                        <h4 className={styles.filter_items_input_title} >Время получения</h4>
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
                        <h4 className={styles.filter_items_input_title} >Дата возврата</h4>
                        <Listbox>
                            <Listbox.Button onClick={() => setOpenCalendar(true)} className={styles.filter_items_list_show}>
                                <p className={styles.filter_items_input}>{'Вт, 10 апреля 2023 г.'}</p>
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
                        <h4 className={styles.filter_items_input_title} >Время возврата</h4>
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

                    <div className={styles.filter_input_btn}>
                        Найти
                    </div>
                </div>
            </div>


            {/* ====================================================================================================== */}

            <div className={styles.filter_items_add_information}>
                <h3 className={styles.filter_items_add_title}>Дополнительные сведения</h3>
                <div className={styles.filter_items_time}>

                    <div className={styles.filter_items_input_container}>
                        <h4 className={styles.filter_items_input_title} >Гражданство гостей</h4>
                        <Listbox>
                            <Listbox.Button className={styles.filter_items_list_show}>
                                <p className={styles.filter_items_input}>{'Выберите свое гражданство'}</p>
                                <img src={DOWN} alt="down" />
                            </Listbox.Button>
                            {/* <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                    <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                    <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                </Listbox.Options> */}
                        </Listbox>
                    </div>

                    <div className={styles.filter_items_input_container}>
                        <h4 className={styles.filter_items_input_title} >Ранний заезд</h4>
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
                        <h4 className={styles.filter_items_input_title} >Ранний заезд</h4>
                        <Listbox>
                            <Listbox.Button onClick={() => setOpenCalendar(true)} className={styles.filter_items_list_show}>
                                <p className={styles.filter_items_input}>{'Чт, 13 апреля 2023 г.'}</p>
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
                        <h4 className={styles.filter_items_input_title} >Взрослые</h4>
                        <div className={styles.filter_items_list_show}>
                            <img className={styles.filter_items_sign} src={MINUS} alt="minus" />
                            <input type="text" className={styles.filter_items_input_age} value={"1"} />
                            <img className={styles.filter_items_sign} src={PLUS} alt="plus" />
                        </div>
                    </div>
                    <div className={styles.filter_items_input_container}>
                        <h4 className={styles.filter_items_input_title} >Дети (2-12 лет)</h4>
                        <div className={styles.filter_items_list_show}>
                            <img className={styles.filter_items_sign} src={MINUS} alt="minus" />
                            <input type="text" className={styles.filter_items_input_age} value={"0"} />
                            <img className={styles.filter_items_sign} src={PLUS} alt="plus" />
                        </div>
                    </div>
                    <div className={styles.filter_items_input_container}>
                        <h4 className={styles.filter_items_input_title} >Младенцы</h4>
                        <div className={styles.filter_items_list_show}>
                            <img className={styles.filter_items_sign} src={MINUS} alt="minus" />
                            <input type="text" className={styles.filter_items_input_age} value={"0"} />
                            <img className={styles.filter_items_sign} src={PLUS} alt="plus" />
                        </div>
                    </div>
                </div>

                <Menu>
                    <div className={styles.filter_items_add_stars}>
                        <div className={styles.filter_items_add_checkbox_con}>
                            <input type="checkbox" className={styles.filter_items_add_checkbox} />
                            <p className={styles.filter_items_add_text}>Детское кресло</p>
                        </div>

                        <div className={styles.filter_items_add_checkbox_con}>
                            <input type="checkbox" className={styles.filter_items_add_checkbox} />
                            <p className={styles.filter_items_add_text}>GPS</p>
                        </div>

                        <div className={styles.filter_items_add_checkbox_con}>
                            <input type="checkbox" className={styles.filter_items_add_checkbox} />
                            <p className={styles.filter_items_add_text}>Зимние шины</p>
                        </div>
                    </div>
                </Menu>
            </div>
        </div>
    )
}

export default FILTERBYAUTO