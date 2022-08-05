import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ContactFilter.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const ContactFilter = ({ className }) => {
    const [active, setActive] = useState('message');
    const handleActive = (e) => {
        if (e.target.dataset.filter) {
            setActive(e.target.dataset.filter);
        }
    };
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('filters')}>
                <p
                    className={cx('filter-item', {
                        active: active === 'message',
                    })}
                    data-filter="message"
                    onClick={(e) => handleActive(e)}
                >
                    Tin nhắn
                </p>
                <p
                    className={cx('filter-item', {
                        active: active === 'group',
                    })}
                    data-filter="group"
                    onClick={(e) => handleActive(e)}
                >
                    Nhóm
                </p>
                <p
                    className={cx('filter-item', {
                        active: active === 'friend',
                    })}
                    data-filter="friend"
                    onClick={(e) => handleActive(e)}
                >
                    Bạn
                </p>
                <p
                    className={cx('filter-item', {
                        active: active === 'invitation',
                    })}
                    data-filter="invitation"
                    onClick={(e) => handleActive(e)}
                >
                    Mời
                </p>
            </div>
        </div>
    );
};

ContactFilter.propTypes = {};

export default ContactFilter;
