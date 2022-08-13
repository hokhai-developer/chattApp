import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './FriendRequest.module.scss';
import PropTypes from 'prop-types';
import { AppContext } from '~/Context/AppProvider';
import Modal from '~/components/Modal';
import Icon from '~/components/Icon';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const FriendRequest = (props) => {
    const { showFriendRequest, setShowFriendRequest } = useContext(AppContext);
    return (
        <Modal showModal={showFriendRequest} setShowModal={setShowFriendRequest}>
            <div className={cx('wrapper-friend-request')}>
                <header className={cx('header')}>
                    <h3 className={cx('title')}>Thêm bạn</h3>
                    <button className={cx('btn-close')} onClick={() => setShowFriendRequest(false)}>
                        <Icon>
                            <ClearOutlinedIcon fontSize="large" />
                        </Icon>
                    </button>
                </header>
                <div className={cx('group-search')}>
                    <label htmlFor="name" className={cx('name')}>
                        Tìm kiếm:
                    </label>
                    <input type="text" placeholder="Nhập tên muốn tìm kiếm" id="name" className={cx('input-name')} />
                    <button className={cx('search-btn-clear')}>
                        <Icon>
                            <ClearOutlinedIcon fontSize="medium" />
                        </Icon>
                    </button>
                </div>
                <div className={cx('group-results')}>
                    <label className={cx('title')}>Kết quả tìm kiếm:</label>
                    <div className={cx('result-list')}>
                        <div className={cx('checked-item')}>
                            <Image
                                src={
                                    'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                }
                                className={cx('item-image')}
                            />
                            <p
                                className={cx('checked-user-name', {
                                    checked: true,
                                })}
                            >
                                user name
                            </p>
                            <button className={cx('item-btn')}>Thêm bạn</button>
                            <button className={cx('item-btn')}>Gửi tin nhắn</button>
                        </div>
                        <div className={cx('checked-item')}>
                            <Image
                                src={
                                    'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                }
                                className={cx('item-image')}
                            />
                            <p
                                className={cx('checked-user-name', {
                                    checked: true,
                                })}
                            >
                                user name
                            </p>
                            <button className={cx('item-btn')}>Thêm bạn</button>
                            <button className={cx('item-btn')}>Gửi tin nhắn</button>
                        </div>
                        <div className={cx('checked-item')}>
                            <Image
                                src={
                                    'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                }
                                className={cx('item-image')}
                            />
                            <p
                                className={cx('checked-user-name', {
                                    checked: true,
                                })}
                            >
                                user name
                            </p>
                            <button className={cx('item-btn')}>Thêm bạn</button>
                            <button className={cx('item-btn')}>Gửi tin nhắn</button>
                        </div>
                        <div className={cx('checked-item')}>
                            <Image
                                src={
                                    'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                }
                                className={cx('item-image')}
                            />
                            <p
                                className={cx('checked-user-name', {
                                    checked: true,
                                })}
                            >
                                user name
                            </p>
                            <button className={cx('item-btn')}>Thêm bạn</button>
                            <button className={cx('item-btn')}>Gửi tin nhắn</button>
                        </div>
                        <div className={cx('checked-item')}>
                            <Image
                                src={
                                    'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                }
                                className={cx('item-image')}
                            />
                            <p
                                className={cx('checked-user-name', {
                                    checked: true,
                                })}
                            >
                                user name
                            </p>
                            <button className={cx('item-btn')}>Thêm bạn</button>
                            <button className={cx('item-btn')}>Gửi tin nhắn</button>
                        </div>
                        <div className={cx('checked-item')}>
                            <Image
                                src={
                                    'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                }
                                className={cx('item-image')}
                            />
                            <p
                                className={cx('checked-user-name', {
                                    checked: true,
                                })}
                            >
                                user name
                            </p>
                            <button className={cx('item-btn')}>Thêm bạn</button>
                            <button className={cx('item-btn')}>Gửi tin nhắn</button>
                        </div>
                        <div className={cx('checked-item')}>
                            <Image
                                src={
                                    'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                }
                                className={cx('item-image')}
                            />
                            <p
                                className={cx('checked-user-name', {
                                    checked: true,
                                })}
                            >
                                user name
                            </p>
                            <button className={cx('item-btn')}>Thêm bạn</button>
                            <button className={cx('item-btn')}>Gửi tin nhắn</button>
                        </div>
                        <div className={cx('checked-item')}>
                            <Image
                                src={
                                    'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                }
                                className={cx('item-image')}
                            />
                            <p
                                className={cx('checked-user-name', {
                                    checked: true,
                                })}
                            >
                                user name
                            </p>
                            <button className={cx('item-btn')}>Thêm bạn</button>
                            <button className={cx('item-btn')}>Gửi tin nhắn</button>
                        </div>
                        <div className={cx('checked-item')}>
                            <Image
                                src={
                                    'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                }
                                className={cx('item-image')}
                            />
                            <p
                                className={cx('checked-user-name', {
                                    checked: true,
                                })}
                            >
                                user name
                            </p>
                            <button className={cx('item-btn')}>Thêm bạn</button>
                            <button className={cx('item-btn')}>Gửi tin nhắn</button>
                        </div>
                        <div className={cx('checked-item')}>
                            <Image
                                src={
                                    'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                }
                                className={cx('item-image')}
                            />
                            <p
                                className={cx('checked-user-name', {
                                    checked: true,
                                })}
                            >
                                user name
                            </p>
                            <button className={cx('item-btn')}>Thêm bạn</button>
                            <button className={cx('item-btn')}>Gửi tin nhắn</button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

FriendRequest.propTypes = {};

export default FriendRequest;
