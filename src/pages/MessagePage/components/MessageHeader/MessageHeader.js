import React from 'react';
import classNames from 'classnames/bind';
import styles from './MessageHeader.module.scss';
import PropTypes from 'prop-types';
import Avatar from '~/components/Avatar';
import Icon from '~/components/Icon';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const cx = classNames.bind(styles);
const MessageHeader = (props) => {
    return (
        <div className={cx('wrapper-mess-header')}>
            <header className={cx('header')}>
                <button className={cx('btn-back', 'btn')}>
                    <Icon>
                        <ArrowBackIosNewOutlinedIcon fontSize="medium" />
                    </Icon>
                </button>
                <div className={cx('info')}>
                    <div className={cx('avatar')}>
                        <Avatar
                            type="single"
                            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        />
                    </div>
                    <div className={cx('title')}>
                        <p className={cx('name')}>User Name lore</p>
                        <p className={cx('time-update')}>Time update</p>
                    </div>
                </div>

                <div className={cx('actions')}>
                    <button className={cx('btn')}>
                        <Icon>
                            <PersonAddAltOutlinedIcon fontSize="large" />
                        </Icon>
                    </button>
                </div>
            </header>
        </div>
    );
};

MessageHeader.propTypes = {};

export default MessageHeader;
