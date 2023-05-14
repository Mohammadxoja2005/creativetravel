import React, { FC, Fragment } from 'react'
// layouts
import HEADER from '../../layouts/header';
import FOOTER from '../../layouts/footer';
import CONTACTDETAIL from './components/contactDetail';

const CONTACT: FC = () => {
    return (
        <Fragment>
            <HEADER />
            <CONTACTDETAIL />
            <FOOTER />
        </Fragment>
    )
}

export default CONTACT