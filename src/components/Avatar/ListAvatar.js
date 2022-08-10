import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

const ListAvatar = ({ src, alt, type }) => {
    return (
        <div className={cx('list-avatar')}>
            <Image
                src={
                    src
                        ? src
                        : 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
                }
                alt={alt}
                className={cx('avatar-item', {
                    group: type === 'group',
                })}
            />
            <Image
                src={
                    src
                        ? src
                        : 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
                }
                alt={alt}
                className={cx('avatar-item', {
                    group: type === 'group',
                })}
            />
            <Image
                src={
                    src
                        ? src
                        : 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
                }
                alt={alt}
                className={cx('avatar-item', {
                    group: type === 'group',
                })}
            />
            <p
                className={cx('avatar-item', 'end', {
                    group: type === 'group',
                })}
            >
                4
            </p>
        </div>
    );
};

ListAvatar.propTypes = {};

export default ListAvatar;
