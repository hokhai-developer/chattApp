import React from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import PropTypes from 'prop-types';
import ContactSearch from '../ContactSearch';
import ContactFilter from '../ContactFilter';
import Conversation from '~/layOuts/components/Conversation';

const cx = classNames.bind(styles);
const Contact = (props) => {
    return (
        <div className={cx('wrapper')}>
            <ContactSearch />
            <ContactFilter />
            <Conversation />
            <div className={cx('resize')}></div>
        </div>
    );
};

Contact.propTypes = {};

export default Contact;
