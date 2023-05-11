import React, { useEffect } from 'react';

import HEADER from '../../layouts/header';
import FILTER from '../../layouts/filter';
import TRAVEL from './components/travel';
import ABOUTUS from './components/aboutus';
import SUB from './components/sub';
import FOOTER from '../../layouts/footer';

const MAIN = () => {
    return (
        <>
            <HEADER />
            <FILTER />
            <TRAVEL />
            <ABOUTUS />
            <SUB />
            <FOOTER />
        </>
    )
}

export default MAIN;