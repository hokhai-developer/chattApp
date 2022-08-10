import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import Icon from '../Icon';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import FormGroup from './FormGroup';

const cx = classNames.bind(styles);
const FormHeader = ({ className, title, handleCloseModel = () => {} }) => {
    const handleClick = () => {
        handleCloseModel(false);
    };
    return (
        <FormGroup borderBottom>
            <header className={cx('header', className)}>
                <h3 className={cx('title')}>{title}</h3>
                <button className={cx('btn-close')} onClick={handleClick}>
                    <Icon>
                        <ClearOutlinedIcon fontSize="large" />
                    </Icon>
                </button>
            </header>
        </FormGroup>
    );
};

FormHeader.propTypes = {};

export default FormHeader;
