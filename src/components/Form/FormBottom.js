import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import Icon from '../Icon';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import FormGroup from './FormGroup';

const cx = classNames.bind(styles);
const FormBottom = ({ className, title, handleCloseModel = () => {}, hanđleOke = () => {} }) => {
    const handleClickClose = () => {
        handleCloseModel(false);
    };
    return (
        <FormGroup borderTop>
            <div className={cx('wrapper-bottom')}>
                <button className={cx('btn', 'cancel')} onClick={handleClickClose}>
                    Hủy
                </button>
                <button className={cx('btn', 'create')}>Tạo nhóm</button>
            </div>
        </FormGroup>
    );
};

FormBottom.propTypes = {};

export default FormBottom;
