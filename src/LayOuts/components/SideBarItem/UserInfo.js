import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './SideBarItem.module.scss';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import Images from '~/assets/images';
import { Tooltip } from '@mui/material';
import { Zoom } from '@mui/material';
import { AuthContext } from '~/Context/AuthProvider';

const cx = classNames.bind(styles);
const UserInfo = (props) => {
    const { user } = useContext(AuthContext);
    return (
        <div className={cx('wrapper-user')}>
            <Tooltip
                TransitionComponent={Zoom}
                title={user.displayName ? user.displayName : 'user-name'}
                placement="right"
                enterDelay={300}
                leaveDelay={200}
            >
                <Image
                    src={user.photoURL ? user.photoURL : Images.userDefault}
                    atl={'user-avatar'}
                    className={cx('avatar')}
                />
            </Tooltip>
        </div>
    );
};

UserInfo.propTypes = {};

export default UserInfo;
