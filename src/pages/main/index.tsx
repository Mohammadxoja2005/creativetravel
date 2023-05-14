import React, { Fragment } from 'react';

import HEADER from '../../layouts/header';
import FILTER from '../../layouts/filter';
import TRAVEL from './components/travel';
import ABOUTUS from './components/aboutus';
import SUB from '../../layouts/sub';
import FOOTER from '../../layouts/footer';

const MAIN = () => {
    return (
        <Fragment>
            <HEADER />
            <FILTER />
            <TRAVEL />
            <ABOUTUS />
            <SUB />
            <FOOTER />
        </Fragment>
    )
}

export default MAIN;