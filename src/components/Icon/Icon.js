import React from 'react';
import classNames from 'classnames/bind';
import styles from './Icon.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const Icon = React.forwardRef(({ children, className, onClick = () => {}, ...props }, ref) => {
    return (
        <div className={cx('wrapper', className)} onClick={() => onClick()} ref={ref} {...props}>
            {children}
        </div>
    );
});

Icon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default Icon;
