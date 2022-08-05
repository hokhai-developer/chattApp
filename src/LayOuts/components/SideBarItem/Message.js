import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBarItem.module.scss';
import PropTypes from 'prop-types';

import { Tooltip } from '@mui/material';
import { Zoom } from '@mui/material';
import Icon from '~/components/Icon';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase/config';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
const Message = (props) => {
    return (
        <div className={cx('wrapper-link')}>
            <NavLink
                to="message"
                className={({ isActive }) => {
                    return cx('nav-link', {
                        active: isActive,
                    });
                }}
            >
                <Tooltip TransitionComponent={Zoom} title="Message" placement="right" enterDelay={300} leaveDelay={200}>
                    <Icon>
                        <MessageOutlinedIcon fontSize="large" />
                    </Icon>
                </Tooltip>
            </NavLink>
        </div>
    );
};

Message.propTypes = {};

export default Message;
