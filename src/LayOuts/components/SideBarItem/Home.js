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
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
const Home = (props) => {
    return (
        <div className={cx('wrapper-link')}>
            <NavLink
                to="/"
                end
                className={({ isActive }) => {
                    return cx('nav-link', {
                        active: isActive,
                    });
                }}
            >
                <Tooltip TransitionComponent={Zoom} title="Home" placement="right" enterDelay={300} leaveDelay={200}>
                    <Icon>
                        <HomeOutlinedIcon fontSize="large" />
                    </Icon>
                </Tooltip>
            </NavLink>
        </div>
    );
};

Home.propTypes = {};

export default Home;
