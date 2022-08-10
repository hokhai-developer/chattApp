import React from 'react';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';
import PropTypes from 'prop-types';
import Image from '../Image';
import ListAvatar from './ListAvatar';
import moment from 'moment';

const cx = classNames.bind(styles);
const Avatar = ({ type, src, alt, className, ...passProps }) => {
    return (
        <div className={cx('wrapper', classNames)} {...passProps}>
            {type === 'single' ? (
                <Image
                    src={
                        src
                            ? src
                            : 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
                    }
                    alt={alt}
                    className={cx('avatar-item', {
                        single: type === 'single',
                    })}
                />
            ) : (
                <ListAvatar type={type} src={src} alt={alt} />
            )}
        </div>
    );
};

Avatar.propTypes = {};

export default Avatar;
