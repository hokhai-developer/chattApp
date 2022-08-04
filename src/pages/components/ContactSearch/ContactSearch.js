import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ContactSearch.module.scss';
import PropTypes from 'prop-types';
import Icon from '~/components/Icon';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useDebounce } from '~/hooks/useDebounce';

const cx = classNames.bind(styles);
const ContactSearch = (props) => {
    const [showClose, setShowClose] = useState(false);
    const [value, setValue] = useState('');
    const debounceValue = useDebounce(value);
    const inputRef = useRef();
    const handleClose = (e) => {
        e.preventDefault();
        setValue('');
        setShowClose(false);
    };
    const handleClear = () => {
        setValue('');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contact-search')}>
                <Icon className={cx('search-icon')}>
                    <SearchOutlinedIcon />
                </Icon>
                <input
                    disabled={value.trim().length >= 100 ? true : false}
                    ref={inputRef}
                    type="text"
                    className={cx('search-input', {
                        active: value.trim().length > 0,
                    })}
                    placeholder="Tìm kiếm"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => {
                        setShowClose(true);
                    }}
                />
                {value.trim().length > 0 && (
                    <Icon className={cx('clear-icon')} onClick={handleClear}>
                        <ClearOutlinedIcon />
                    </Icon>
                )}
            </div>
            <div className={cx('actions')}>
                {!showClose ? (
                    <>
                        <Icon className={cx('action-icon')}>
                            <PersonAddAltOutlinedIcon fontSize="medium" />
                        </Icon>
                        <Icon className={cx('action-icon')}>
                            <GroupAddOutlinedIcon fontSize="medium" />
                        </Icon>
                    </>
                ) : (
                    <button className={cx('btn-close')} onClick={(e) => handleClose(e)}>
                        Đóng
                    </button>
                )}
            </div>
        </div>
    );
};

ContactSearch.propTypes = {};

export default ContactSearch;
