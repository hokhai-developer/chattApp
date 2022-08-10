import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import Image from '../Image';

const cx = classNames.bind(styles);
const ItemUser = ({ className, title, onClick = () => {} }) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <div className={cx('wrapper-item', className)}>
            <Image
                src={'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png'}
                type="single"
                className={cx('avatar')}
            />
            <p className={cx('user-name')}>user name</p>
            <button className={cx('btn-request')} onClick={handleClick}>
                {title}
            </button>
        </div>
    );
};

ItemUser.propTypes = {};

export default ItemUser;
