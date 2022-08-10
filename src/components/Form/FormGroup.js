import React from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);
const FormGroup = ({ className, children, borderBottom, borderTop }) => {
    return (
        <div
            className={cx('form-group', className, {
                borderBottom,
                borderTop,
            })}
        >
            {children}
        </div>
    );
};

FormGroup.propTypes = {};

export default FormGroup;
