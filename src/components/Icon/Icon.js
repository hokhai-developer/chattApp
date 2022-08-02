import React from 'react';
import classNames from 'classnames/bind';
import styles from './Icon.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const Icon = ({ children, className, onClick }) => {
    return (
        <div className={cx('wrapper', className)} onClick={() => onClick()}>
            {children}
        </div>
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default Icon;
