import React from 'react';
import classNames from 'classnames/bind';
import styles from './Divide.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const Divide = ({ className }) => {
    return <div className={cx('wrapper', className)}></div>;
};

Divide.propTypes = {
    className: PropTypes.string,
};

export default Divide;
