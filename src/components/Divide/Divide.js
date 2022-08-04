import React from 'react';
import classNames from 'classnames/bind';
import styles from './Divide.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const Divide = ({ className, space, height }) => {
    let style = {};
    if (space) {
        style = {
            ...style,
            'margin-top': `${space}px`,
            'margin-bottom': `${space}px`,
        };
    }
    if (height) {
        style = {
            ...style,
            height: `${height}px`,
        };
    }
    return <div className={cx('wrapper', className)} style={style}></div>;
};

Divide.propTypes = {
    className: PropTypes.string,
    space: PropTypes.number,
    height: PropTypes.number,
};

export default Divide;
