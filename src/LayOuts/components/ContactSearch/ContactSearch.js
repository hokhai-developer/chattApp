import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ContactSearch.module.scss';
import PropTypes from 'prop-types';
import Icon from '~/components/Icon';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useDebounce } from '~/hooks/useDebounce';
import { generateKeywords } from '~/utils/generateKeywords';
import SearchResults from '../SearchResults';
import { Popper, Tooltip, Zoom } from '@mui/material';
import { AppContext } from '~/Context/AppProvider';
import CreateNewGroup from '../CreateNewGroup';
import FriendRequest from '../FriendRequest';

const cx = classNames.bind(styles);
const ContactSearch = (props) => {
    const [value, setValue] = useState('');
    const [showResults, setShowResults] = useState(false);
    const { setShowAddNewConversationGroup, setShowFriendRequest } = useContext(AppContext);
    const debounceValue = useDebounce(value);
    const inputRef = useRef(null);
    const searchRef = useRef(null);

    const handleClose = (e) => {
        e.preventDefault();
        setValue('');
        setShowResults(false);
    };

    const handleClear = () => {
        setValue('');
        setShowResults(false);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleCreateGroup = () => {
        setShowAddNewConversationGroup(true);
    };
    const handleFriendRequest = () => {
        setShowFriendRequest(true);
    };

    return (
        <>
            <div className={cx('wrapper')} ref={searchRef}>
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
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        onFocus={() => {
                            setShowResults(true);
                        }}
                    />
                    {value.trim().length > 0 && (
                        <Icon className={cx('clear-icon')} onClick={handleClear}>
                            <ClearOutlinedIcon />
                        </Icon>
                    )}
                </div>
                <div className={cx('actions')}>
                    {!showResults > 0 ? (
                        <>
                            <Tooltip
                                title="Thêm bạn"
                                TransitionComponent={Zoom}
                                placement="bottom"
                                enterDelay={300}
                                leaveDelay={200}
                            >
                                <Icon className={cx('action-icon')} onClick={handleFriendRequest}>
                                    <PersonAddAltOutlinedIcon fontSize="medium" />
                                </Icon>
                            </Tooltip>
                            <Tooltip
                                title="Tạo mới nhóm chat"
                                TransitionComponent={Zoom}
                                placement="bottom"
                                enterDelay={300}
                                leaveDelay={200}
                            >
                                <Icon className={cx('action-icon')} onClick={handleCreateGroup}>
                                    <GroupAddOutlinedIcon fontSize="medium" />
                                </Icon>
                            </Tooltip>
                        </>
                    ) : (
                        <button className={cx('btn-close')} onClick={(e) => handleClose(e)}>
                            Đóng
                        </button>
                    )}
                </div>
            </div>
            <Popper open={showResults} anchorEl={searchRef.current} className={'popper'}>
                <div>the content of the popper</div>
                <div>the content of the popper</div>
                <div>the content of the popper</div>
            </Popper>
            <CreateNewGroup />
            <FriendRequest />
        </>
    );
};

ContactSearch.propTypes = {};

export default ContactSearch;
