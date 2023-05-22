import React, { FC, useState } from 'react'
// styles 
import styles from "./index.module.scss";
import { Menu, Transition, Listbox, Combobox } from '@headlessui/react';
// calendar 
import Calendar from 'react-calendar';
// icons
import DOWN from "../../../assets/icons/down.png";

const FILTERBYHOTEL: FC = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [calendarValue, setCalendarValue] = useState<Date>(new Date());
    const [openCalendar, setOpenCalendar] = useState<boolean>(false);

    const handleChange = (event: any) => {
        setSelectedDate(event.target.value);
    };

    const [geo, setGeo] = useState<string>('');
    const [checkIn, setCheckin] = useState<string>();
    const [checkOut, setCheckOut] = useState<string>();
    const [numberOfGeusts, setNumberOfGuests] = useState<number>();
    const [numberOfRooms, setNumberOfRooms] = useState<number>();
    const [chooseCitizen, setChooseCitizen] = useState<string>('');
    const [earlyCheckIn, setEarlyCheckIn] = useState<string>();
    const [earlyCheckOut, setEarlyCheckOut] = useState<string>();
    const [cat, setCat] = useState<string>();
    const [star, setStar] = useState<number>();
    const [freeCancel, setFreeCancel] = useState<boolean>();

    console.log(geo);

    return (
        <>
            <div className={styles.filter_items}>
                <div className={styles.filter_items_basic_information}>
                    <h3 className={styles.filter_items_basic_title}>Основные сведения</h3>
                    <div className={styles.filter_items_dates_locations}>

                        <Combobox value={geo} onChange={setGeo}>
                            <div className={styles.filter_items_basic_input_container}>
                                <h4 className={styles.filter_items_input_title} >Местоположение</h4>
                                <Combobox.Input
                                    type="text"
                                    className={styles.filter_items_input}
                                    onChange={(e) => setGeo(e.target.value)}
                                />
                                <Combobox.Options className={styles.filter_items_listbox_geust_option}>
                                    <Combobox.Option value={'Ташкент, Узбекистан'} className={styles.filter_items_listbox}>
                                        {'Ташкент, Узбекистан'}
                                    </Combobox.Option>
                                </Combobox.Options>
                            </div>
                        </Combobox>

                        <div className={styles.filter_items_input_date_container}>
                            <div className={styles.filter_items_basic_input_container}>
                                <h4 className={styles.filter_items_input_title}>Заезд</h4>
                                <input onClick={() => setOpenCalendar(true)} type="text" value={'17 марта 2023 г.'} className={styles.filter_items_input} />
                                {/* <input onChange={handleChange} type="date" className={styles.filter_items_input} /> */}
                            </div>
                            {/* {openCalendar
                        ?
                        <div className={styles.filter_calendar_container}>
                            <Calendar onChange={(e: any) => chooseCalendarValue(e)} value={calendarValue} />
                        </div>
                        : null} */}
                        </div>

                        <div className={styles.filter_items_input_date_container}>
                            <div className={styles.filter_items_basic_input_container}>
                                <h4 className={styles.filter_items_input_title}>Выезд</h4>
                                <input onClick={() => setOpenCalendar(true)} type="text" value={'17 марта 2023 г.'} className={styles.filter_items_input} />
                                {/* <input onChange={handleChange} type="date" className={styles.filter_items_input} /> */}
                            </div>
                            {/* {openCalendar
                        ?
                        <div className={styles.filter_calendar_container}>
                            <Calendar onChange={(e: any) => chooseCalendarValue(e)} value={calendarValue} />
                        </div>
                        : null} */}
                        </div>

                        <div className={styles.filter_items_basic_input_container}>
                            <h4 className={styles.filter_items_input_title} >Количество гостей</h4>
                            <Listbox>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{'2 гостей'}</p>
                                    <img src={DOWN} alt="down" />
                                </Listbox.Button>
                                {/* <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                            <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                            <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                        </Listbox.Options> */}
                            </Listbox>
                        </div>

                        <div className={styles.filter_items_basic_input_container}>
                            <h4 className={styles.filter_items_input_title} >Количество номеров</h4>
                            <Listbox>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{'2 номера'}</p>
                                    <img src={DOWN} alt="down" />
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

                <div className={styles.filter_items_add_information}>
                    <h3 className={styles.filter_items_add_title}>Дополнительные сведения</h3>

                    <div className={styles.filter_items_time}>

                        <Listbox value={chooseCitizen} onChange={setChooseCitizen}>
                            <div className={styles.filter_items_add_input_container}>
                                <h4 className={styles.filter_items_input_title} >Гражданство гостей</h4>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{chooseCitizen.length == 0 ? 'Выберите свое гражданство' : chooseCitizen}</p>
                                    <img src={DOWN} alt="down" />
                                </Listbox.Button>
                                <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                                    {[1, 2, 3, 4, 5, 6, 7].map((value) => {
                                        return (
                                            <Listbox.Option className={styles.filter_items_listbox} value={value}>
                                                Uzbek
                                            </Listbox.Option>
                                        )
                                    })

                                    }
                                </Listbox.Options>
                            </div>
                        </Listbox>

                        <div className={styles.filter_items_add_input_container}>
                            <h4 className={styles.filter_items_input_title} >Ранний заезд</h4>
                            <Listbox>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{'Выберите время'}</p>
                                    <img src={DOWN} alt="down" />
                                </Listbox.Button>
                                {/* <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                            <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                            <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                        </Listbox.Options> */}
                            </Listbox>
                        </div>

                        <div className={styles.filter_items_add_input_container}>
                            <h4 className={styles.filter_items_input_title} >Поздний заезд</h4>
                            <Listbox>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{'Выберите время'}</p>
                                    <img src={DOWN} alt="down" />
                                </Listbox.Button>
                                {/* <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                            <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                            <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                        </Listbox.Options> */}
                            </Listbox>
                        </div>

                        <Menu>
                            <div className={styles.filter_items_add_choose_btns}>
                                <Menu.Button className={styles.filter_items_add_choose_btn}>
                                    Ro
                                    <div className={styles.filter_items_add_line} ></div>
                                </Menu.Button>
                                <Menu.Button className={styles.filter_items_add_choose_btn}>
                                    BB
                                    <div className={styles.filter_items_add_line} ></div>
                                </Menu.Button>
                                <Menu.Button className={styles.filter_items_add_choose_btn}>
                                    hb
                                    <div className={styles.filter_items_add_line} ></div>
                                </Menu.Button>
                                <Menu.Button className={styles.filter_items_add_choose_btn}>
                                    fb
                                    <div className={styles.filter_items_add_line} ></div>
                                </Menu.Button>
                                <Menu.Button className={styles.filter_items_add_choose_btn}>
                                    ai
                                    <div className={styles.filter_items_add_line} ></div>
                                </Menu.Button>
                            </div>
                        </Menu>

                    </div>

                    <Menu>
                        <div className={styles.filter_items_add_stars}>
                            <Menu.Button className={styles.filter_items_add_star}>
                                Без звёзд
                                <div className={styles.filter_items_add_star_line} ></div>
                            </Menu.Button>
                            <Menu.Button className={styles.filter_items_add_star}>
                                2 звезды
                                <div className={styles.filter_items_add_star_line} ></div>
                            </Menu.Button>
                            <Menu.Button className={styles.filter_items_add_star}>
                                3 звезды
                                <div className={styles.filter_items_add_star_line} ></div>
                            </Menu.Button>
                            <Menu.Button className={styles.filter_items_add_star}>
                                4 звезды
                                <div className={styles.filter_items_add_star_line} ></div>
                            </Menu.Button>
                            <Menu.Button className={styles.filter_items_add_star}>
                                5 звёзд
                                <div className={styles.filter_items_add_star_line} ></div>
                            </Menu.Button>

                            <div className={styles.filter_items_add_checkbox_con}>
                                <input type="checkbox" className={styles.filter_items_add_checkbox} />
                                <p className={styles.filter_items_add_text}>Бесплатная отмена</p>
                            </div>
                        </div>
                    </Menu>
                </div>
            </div>

            <div className={styles.filter_items_response}>
                <div className={styles.filter_items_basic_information}>
                    <h3 className={styles.filter_items_basic_title}>Основные сведения</h3>
                    <div className={styles.filter_items_dates_locations}>

                        <Combobox value={geo} onChange={setGeo}>
                            <div className={styles.filter_items_basic_input_container}>
                                <h4 className={styles.filter_items_input_title} >Местоположение</h4>
                                <Combobox.Input
                                    type="text"
                                    className={styles.filter_items_input}
                                    onChange={(e) => setGeo(e.target.value)}
                                />
                                <Combobox.Options className={styles.filter_items_listbox_geust_option}>
                                    <Combobox.Option value={'Ташкент, Узбекистан'} className={styles.filter_items_listbox}>
                                        {'Ташкент, Узбекистан'}
                                    </Combobox.Option>
                                </Combobox.Options>
                            </div>
                        </Combobox>

                        <div className={styles.filter_items_input_date_container}>
                            <div className={styles.filter_items_basic_input_container}>
                                <h4 className={styles.filter_items_input_title}>Заезд</h4>
                                <input onClick={() => setOpenCalendar(true)} type="text" value={'17 марта 2023 г.'} className={styles.filter_items_input} />
                                {/* <input onChange={handleChange} type="date" className={styles.filter_items_input} /> */}
                            </div>
                            {/* {openCalendar
            ?
            <div className={styles.filter_calendar_container}>
                <Calendar onChange={(e: any) => chooseCalendarValue(e)} value={calendarValue} />
            </div>
            : null} */}
                        </div>

                        <div className={styles.filter_items_input_date_container}>
                            <div className={styles.filter_items_basic_input_container}>
                                <h4 className={styles.filter_items_input_title}>Выезд</h4>
                                <input onClick={() => setOpenCalendar(true)} type="text" value={'17 марта 2023 г.'} className={styles.filter_items_input} />
                                {/* <input onChange={handleChange} type="date" className={styles.filter_items_input} /> */}
                            </div>
                            {/* {openCalendar
            ?
            <div className={styles.filter_calendar_container}>
                <Calendar onChange={(e: any) => chooseCalendarValue(e)} value={calendarValue} />
            </div>
            : null} */}
                        </div>

                        <div className={styles.filter_items_basic_input_container}>
                            <h4 className={styles.filter_items_input_title} >Количество гостей</h4>
                            <Listbox>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{'2 гостей'}</p>
                                    <img src={DOWN} alt="down" />
                                </Listbox.Button>
                                {/* <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
            </Listbox.Options> */}
                            </Listbox>
                        </div>

                        <div className={styles.filter_items_basic_input_container}>
                            <h4 className={styles.filter_items_input_title} >Количество номеров</h4>
                            <Listbox>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{'2 номера'}</p>
                                    <img src={DOWN} alt="down" />
                                </Listbox.Button>
                                {/* <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
            </Listbox.Options> */}
                            </Listbox>
                        </div>
                    </div>
                </div>

                <div className={styles.filter_items_add_information}>
                    <h3 className={styles.filter_items_add_title}>Дополнительные сведения</h3>

                    <div className={styles.filter_items_time}>
                        <Listbox value={chooseCitizen} onChange={setChooseCitizen}>
                            <div className={styles.filter_items_add_input_container}>
                                <h4 className={styles.filter_items_input_title} >Гражданство гостей</h4>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{chooseCitizen.length == 0 ? 'Выберите свое гражданство' : chooseCitizen}</p>
                                    <img src={DOWN} alt="down" />
                                </Listbox.Button>
                                <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                                    {[1, 2, 3, 4, 5, 6, 7].map((value) => {
                                        return (
                                            <Listbox.Option className={styles.filter_items_listbox} value={value}>
                                                Uzbek
                                            </Listbox.Option>
                                        )
                                    })

                                    }
                                </Listbox.Options>
                            </div>
                        </Listbox>
                        <div className={styles.filter_items_add_input_container}>
                            <h4 className={styles.filter_items_input_title} >Ранний заезд</h4>
                            <Listbox>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{'Выберите время'}</p>
                                    <img src={DOWN} alt="down" />
                                </Listbox.Button>
                                {/* <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
            </Listbox.Options> */}
                            </Listbox>
                        </div>

                        <div className={styles.filter_items_add_input_container}>
                            <h4 className={styles.filter_items_input_title} >Поздний заезд</h4>
                            <Listbox>
                                <Listbox.Button className={styles.filter_items_list_show}>
                                    <p className={styles.filter_items_input}>{'Выберите время'}</p>
                                    <img src={DOWN} alt="down" />
                                </Listbox.Button>
                                {/* <Listbox.Options className={styles.filter_items_listbox_geust_option}>
                <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
                <Listbox.Option value={'valie'} >ddasdfsa</Listbox.Option>
            </Listbox.Options> */}
                            </Listbox>
                        </div>

                        <Menu>
                            <div className={styles.filter_items_add_choose_btns}>
                                <Menu.Button className={styles.filter_items_add_choose_btn}>
                                    Ro
                                    <div className={styles.filter_items_add_line} ></div>
                                </Menu.Button>
                                <Menu.Button className={styles.filter_items_add_choose_btn}>
                                    BB
                                    <div className={styles.filter_items_add_line} ></div>
                                </Menu.Button>
                                <Menu.Button className={styles.filter_items_add_choose_btn}>
                                    hb
                                    <div className={styles.filter_items_add_line} ></div>
                                </Menu.Button>
                                <Menu.Button className={styles.filter_items_add_choose_btn}>
                                    fb
                                    <div className={styles.filter_items_add_line} ></div>
                                </Menu.Button>
                                <Menu.Button className={styles.filter_items_add_choose_btn}>
                                    ai
                                    <div className={styles.filter_items_add_line} ></div>
                                </Menu.Button>
                            </div>
                        </Menu>

                    </div>

                    <Menu>
                        <div className={styles.filter_items_add_stars}>
                            <Menu.Button className={styles.filter_items_add_star}>
                                Без звёзд
                                <div className={styles.filter_items_add_star_line} ></div>
                            </Menu.Button>
                            <Menu.Button className={styles.filter_items_add_star}>
                                2 звезды
                                <div className={styles.filter_items_add_star_line} ></div>
                            </Menu.Button>
                            <Menu.Button className={styles.filter_items_add_star}>
                                3 звезды
                                <div className={styles.filter_items_add_star_line} ></div>
                            </Menu.Button>
                            <Menu.Button className={styles.filter_items_add_star}>
                                4 звезды
                                <div className={styles.filter_items_add_star_line} ></div>
                            </Menu.Button>
                            <Menu.Button className={styles.filter_items_add_star}>
                                5 звёзд
                                <div className={styles.filter_items_add_star_line} ></div>
                            </Menu.Button>

                            <div className={styles.filter_items_add_checkbox_con}>
                                <input type="checkbox" className={styles.filter_items_add_checkbox} />
                                <p className={styles.filter_items_add_text}>Бесплатная отмена</p>
                            </div>
                        </div>
                    </Menu>
                </div>
                <div className={styles.filter_input_btn}>
                    Найти
                </div>
            </div >
        </>
    )
}

export default FILTERBYHOTEL;