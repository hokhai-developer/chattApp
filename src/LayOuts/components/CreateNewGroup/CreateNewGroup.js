import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CreateNewGroup.module.scss';
import PropTypes from 'prop-types';
import Modal from '~/components/Modal';
import { AppContext } from '~/Context/AppProvider';
import Icon from '~/components/Icon';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const CreateNewGroup = (props) => {
    const [inputValue, setInputValue] = useState('');
    const { showAddNewConversationGroup, setShowAddNewConversationGroup } = useContext(AppContext);
    return (
        <Modal setShowModal={setShowAddNewConversationGroup} showModal={showAddNewConversationGroup}>
            <div className={cx('wrapper-create-new-group')}>
                <header className={cx('header')}>
                    <h3 className={cx('title')}>Tạo nhóm</h3>
                    <button className={cx('btn-close')} onClick={() => setShowAddNewConversationGroup(false)}>
                        <Icon>
                            <ClearOutlinedIcon fontSize="large" />
                        </Icon>
                    </button>
                </header>
                <div className={cx('group-name')}>
                    <label htmlFor="name-group" className={cx('name')}>
                        Tên nhóm :
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập tên nhóm...không vượt quá 100 kí tự"
                        id="name-group"
                        className={cx('input-name')}
                    />
                </div>
                <div className={cx('group-selected')}>
                    <p className={cx('title')}>Tìm kiếm thành viên:</p>
                    <div className={cx('wrapper-add')}>
                        <div className={cx('selected-list')}>
                            {/* <div className={cx('selected-item')}>
                                <Image
                                    src={
                                        'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
                                    }
                                    className={cx('item-img')}
                                />
                                <p className={cx('item-user-name')}>user name</p>
                                <Icon className={cx('item-icon-deleted')}>
                                    <ClearOutlinedIcon fontSize="small" />
                                </Icon>
                            </div> */}
                        </div>
                        <div className={cx('selected-search')}>
                            <button className={cx('btn-search')}>
                                <Icon>
                                    <SearchOutlinedIcon />
                                </Icon>
                            </button>
                            <input
                                type="text"
                                placeholder="Tên thành viên nhóm..."
                                className={cx('input')}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            {inputValue.length > 0 && (
                                <button
                                    className={cx('btn-clear')}
                                    onClick={() => {
                                        setInputValue('');
                                    }}
                                >
                                    <Icon>
                                        <ClearOutlinedIcon />
                                    </Icon>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cx('group-checked')}>
                    <p className={cx('title')}>Danh sách bạn:</p>
                    <div className={cx('list-checked')}>
                        <div className={cx('checked-item')}>
                            <input type="checkbox" className={cx('checked-input')} />
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
                            <Icon
                                className={cx('checked-icon', {
                                    checked: true,
                                })}
                            >
                                <CheckOutlinedIcon />
                            </Icon>
                        </div>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <button
                        className={cx('btn', 'cancel')}
                        onClick={() => {
                            setShowAddNewConversationGroup(false);
                        }}
                    >
                        Hủy
                    </button>
                    <button className={cx('btn', 'create')}>Tạo nhóm</button>
                </div>
            </div>
        </Modal>
    );
};

CreateNewGroup.propTypes = {};

export default CreateNewGroup;
