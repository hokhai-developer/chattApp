import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './FormFriendRequest.module.scss';
import PropTypes from 'prop-types';
import FormHeader from '../Form/FormHeader';
import { AppContext } from '~/Context/AppProvider';
import FormBottom from '../Form/FormBottom';
import ResultSearch from './ResultSearch';

const cx = classNames.bind(styles);
const FormFriendRequest = (props) => {
    const { setShowFriendRequest } = useContext(AppContext);
    return (
        <div
            className={cx('wrapper-form-request')}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <FormHeader title="Thêm bạn" handleCloseModel={setShowFriendRequest} />
            <div className={cx('wrapper-form-request-body')}>
                <ResultSearch title={'Tìm bạn mới:'} placeholder={'Nhập tên để thêm bạn mới'} />
            </div>
        </div>
    );
};

FormFriendRequest.propTypes = {};

export default FormFriendRequest;
