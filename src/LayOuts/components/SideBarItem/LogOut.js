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

const cx = classNames.bind(styles);
const LogOut = (props) => {
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {})
            .catch(() => {});
    };
    return (
        <div className={cx('wrapper-logout')} onClick={handleLogOut}>
            <Tooltip TransitionComponent={Zoom} title="Log out" placement="right" enterDelay={300} leaveDelay={200}>
                <Icon>
                    <ExitToAppOutlinedIcon fontSize="large" />
                </Icon>
            </Tooltip>
        </div>
    );
};

LogOut.propTypes = {};

export default LogOut;
