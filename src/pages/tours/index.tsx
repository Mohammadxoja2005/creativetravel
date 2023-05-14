import React, { FC, Fragment } from 'react'
// layouts 
import HEADER from '../../layouts/header';
import TRAVEL from '../../layouts/travel';
import SUB from '../../layouts/sub';
import FOOTER from '../../layouts/footer';

const TOURS: FC = () => {
    return (
        <Fragment>
            <HEADER />
            <TRAVEL />
            <SUB />
            <FOOTER />
        </Fragment>
    )
}

export default TOURS;