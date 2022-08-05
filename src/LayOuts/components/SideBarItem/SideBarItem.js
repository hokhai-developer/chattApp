import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBarItem.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const SideBarItem = ({ className, children }) => {
    return <div className={cx('wrapper', className)}>{children}</div>;
};

SideBarItem.propTypes = {};

export default SideBarItem;
