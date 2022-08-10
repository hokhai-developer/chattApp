import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormFriendRequest.module.scss';
import Icon from '~/components/Icon';
import PropTypes from 'prop-types';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormGroup from '~/components/Form/FormGroup';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Image from '../Image';
import ItemUser from '../Form/ItemUser';

const cx = classNames.bind(styles);
const ResultSearch = ({ className, title, placeholder }) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    return (
        <div className={cx('wrapper-search', className)}>
            <p className={cx('title')}>{title}</p>
            <div className={cx('add-form')}>
                <button className={cx('btn-search')}>
                    <Icon>
                        <SearchOutlinedIcon />
                    </Icon>
                </button>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    className={cx('input')}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {inputValue.length > 0 && (
                    <button
                        className={cx('btn-clear')}
                        onClick={() => {
                            setInputValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <Icon>
                            <ClearOutlinedIcon />
                        </Icon>
                    </button>
                )}
            </div>
            <div className={cx('result-list')}>
                <ItemUser title={'Kết bạn'} />
            </div>
        </div>
    );
};

ResultSearch.propTypes = {};

export default ResultSearch;
