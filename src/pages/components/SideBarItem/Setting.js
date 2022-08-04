import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBarItem.module.scss';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import { Zoom } from '@mui/material';
import Icon from '~/components/Icon';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const cx = classNames.bind(styles);
const Setting = (props) => {
    return (
        <div className={cx('wrapper-message')}>
            <Tooltip TransitionComponent={Zoom} title="Message" placement="right" enterDelay={300} leaveDelay={200}>
                <Icon>
                    <SettingsOutlinedIcon fontSize="large" />
                </Icon>
            </Tooltip>
        </div>
    );
};

Setting.propTypes = {};

export default Setting;
