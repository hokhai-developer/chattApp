import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeHeader.module.scss';
import PropTypes from 'prop-types';
import { AuthContext } from '~/Context/AuthProvider';

const cx = classNames.bind(styles);
const HomeHeader = (props) => {
    const { user } = useContext(AuthContext);
    return (
        <header className={cx('wrapper-header')}>
            <h1 className={cx('header-title')}>
                Chào mừng <span className={cx('user-name')}>{user.displayName}</span> đến với{' '}
                <span className={cx('web-name')}>ChatApp</span>
            </h1>
            <p className={cx('header-description')}>Khám phá những tiện ích trò chuyện cùng mọi người.</p>
            <div className={cx('header-more')}>
                <p className={cx('more-name')}>Có thể kiểm tra với:</p>
                <p className={cx('more-name')}>
                    Email : <span className={cx('text-bold')}>tothianhnhu.pink@gmai.com</span>
                </p>
                <p className={cx('more-name')}>
                    Pass : <span className={cx('text-bold')}>@pink123456789</span>
                </p>
            </div>
        </header>
    );
};

HomeHeader.propTypes = {};

export default HomeHeader;
